import { useTableController } from "../Table.controller";
import { useVendorApi } from "@infrastructure/apis/api-management/vendor";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { usePaginationController } from "../Pagination.controller";
import { downloadDocument, openDocument } from "@infrastructure/utils/downloadUtils";
/**
 * This is controller hook manages the table state including the pagination and data retrieval from the backend.
 */
export const useVendorController = () => {
    const {getVendors: {key : queryKey, query}, deleteVendor: { key: deleteVendorKey, mutation: deleteVendorFn }} = useVendorApi();
    
    const queryClient = useQueryClient(); // Get the query client.
    const { page, pageSize, setPagination } = usePaginationController(); // Get the pagination state.
    
    const { data, isError, isLoading } = useQuery({
        queryKey: [queryKey, page, pageSize],
        queryFn: () => query({ page, pageSize })
    }); // Retrieve the table page from the backend via the query hook.
    
    const tryReload = useCallback(
        () => queryClient.invalidateQueries({ queryKey: [queryKey] }),
        [queryClient, queryKey]); // Create a callback to try reloading the data for the table via query invalidation.

    const { mutateAsync: deleteMutation } = useMutation({
        mutationKey: [deleteVendorKey],
        mutationFn: deleteVendorFn
    }); 

    const remove = useCallback(
            (id: string) => deleteMutation(id).then(() => queryClient.invalidateQueries({ queryKey: [queryKey] })),
            [queryClient, deleteMutation, queryKey]); // Create the callback to remove an entry.

    const tableController = useTableController(setPagination, data?.response?.pageSize); // Adapt the pagination for the table.
    
    return { // Return the controller state and actions.
        ...tableController,
        tryReload,
        pagedData: data?.response,
        isError,
        isLoading,
        remove
    };
}