import {TeddyItemAddFormController, TeddyItemAddFormModel} from "./TeddyItemAddForm.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useIntl } from "react-intl";
import * as yup from "yup";
import { isUndefined } from "lodash";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserApi } from "@infrastructure/apis/api-management";
import { useCallback } from "react";
import { UserRoleEnum } from "@infrastructure/apis/client";
import { SelectChangeEvent } from "@mui/material";
import { TeddyItemCategoryEnum } from "@infrastructure/apis/client/models";
import { useTeddyItemApi } from "@infrastructure/apis/api-management/teddyItem";
import { toast } from "react-toastify";
import { useAppRouter } from "@infrastructure/hooks/useAppRouter";
const getDefaultValues = (initialData?: {}) =>
{
    const defaultValues = {
        // name: "",
        // Filename: "",
        // price: 0,
        // description: "",
        // fabric: "",
        // color: "White",
        // quantity: 0,
        category: "",
        // file: new File([], "empty.txt")
    };

    if (!isUndefined(initialData)) {
        return {
            ...defaultValues,
            ...initialData,
        };
    }

    return defaultValues;
}
export const useInitTeddyItemAddForm = () => {
    const { formatMessage } = useIntl();
    const defaultValues = getDefaultValues();
    const schema = yup.object().shape({
        name: yup.string()
            .required(formatMessage(
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({
                        id: "globals.name",
                    }),
                })),
            // .default(defaultValues.name),
        fileName: yup.string()
            .required(formatMessage(
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({
                        id: "globals.fileName",
                    }),
                })),
            // .default(defaultValues.name),
        price: yup.number()
            .required(formatMessage(
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({
                        id: "globals.price",
                    }),
                })),
            // .default(defaultValues.price),
        description: yup.string(),
            // .default(defaultValues.description),
        fabric: yup.string()
            .required(formatMessage(
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({
                        id: "globals.fabric",
                    }),
                })),
            // .default(defaultValues.fabric),
        color: yup.string()
            .required(formatMessage(
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({
                        id: "globals.color",
                    }),
                })),
            // .default(defaultValues.color),
        quantity: yup.number()
            .required(formatMessage(
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({
                        id: "globals.quantity",
                    }),
                })),
            // .default(defaultValues.quantity),
        category: yup.string()
                    .oneOf([ // The select input should have one of these values.
                        TeddyItemCategoryEnum.Shoes,
                        TeddyItemCategoryEnum.Costume,
                        TeddyItemCategoryEnum.Hoodie,
                        TeddyItemCategoryEnum.TShirt,
                        TeddyItemCategoryEnum.Dress,
                        TeddyItemCategoryEnum.Pants,
                        TeddyItemCategoryEnum.Pyjamas,
                    ])
            .required(formatMessage(
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({
                        id: "globals.category",
                    }),
                }))
            .default(defaultValues.category),
        file: yup.mixed<File>() // For files the schema used should be mixed.
            .required(formatMessage(
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({
                        id: "globals.file",
                    }),
                }))
    });

    const resolver = yupResolver(schema);

    return { defaultValues, resolver };
}

export const useTeddyItemAddFormController = (onSubmit?: () => void) : TeddyItemAddFormController => {
    const { formatMessage } = useIntl();
    const { defaultValues, resolver } = useInitTeddyItemAddForm();
    const { addTeddyItem: { mutation: addTeddyItem, key: addTeddyItemQuery } } = useTeddyItemApi();
    const { redirectToFeed } = useAppRouter();
    const { mutateAsync: add, status } = useMutation({
        mutationKey: [addTeddyItemQuery], 
        mutationFn: addTeddyItem
    })


    const submit = useCallback((data: TeddyItemAddFormModel) => // Create a submit callback to send the form data to the backend.
        add(data).then(() => {
                toast(formatMessage({ id: "notifications.messages.itemAddedSuccess" }));
                redirectToFeed();
        }), [add]);

    // const submit = useCallback((body: TeddyItemAddFormModel) => // Create a submit callback to send the form data to the backend.
    //     add(body).then(() => {
    //         if (onSubmit) {
    //             onSubmit();
    //         }
    //     }), [add]);


    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors }
    } = useForm<TeddyItemAddFormModel>({ // Use the useForm hook to get callbacks and variables to work with the form.
        defaultValues, // Initialize the form with the default values.
        resolver // Add the validation resolver.
    });

    const selectCategory = useCallback((event: SelectChangeEvent<TeddyItemCategoryEnum>) => { // Select inputs are tricky and may need their on callbacks to set the values.
        setValue("category", event.target.value as TeddyItemCategoryEnum, {
            shouldValidate: true,
        });
    }, [setValue]);


    const selectFile = useCallback((file: File) => { // Select inputs are tricky and may need their on callbacks to set the values.
        setValue("file", file,  {
            shouldValidate: true
        });
    }, [setValue]);

    return {
        actions: { // Return any callbacks needed to interact with the form.
            handleSubmit, // Add the form submit handle.
            submit, // Add the submit handle that needs to be passed to the submit handle.
            register, // Add the variable register to bind the form fields in the UI with the form variables.
            watch, // Add a watch on the variables, this function can be used to watch changes on variables if it is needed in some locations.
            selectCategory,
            selectFile,
        },
        computed: {
            defaultValues,
            isSubmitting: status === "pending" // Return if the form is still submitting or nit.
        },
        state: {
            errors // Return what errors have occurred when validating the form input.
        }
    }

}