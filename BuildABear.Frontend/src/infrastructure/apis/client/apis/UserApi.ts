/* tslint:disable */
/* eslint-disable */
/**
 * Build a bear Web App
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BriefUserDTORequestResponse,
  GuidICollectionRequestResponse,
  GuidRequestResponse,
  RequestResponse,
  UserAddDTO,
  UserDTORequestResponse,
  UserUpdateDTO,
  VendorUserAddDTO,
} from '../models';
import {
    BriefUserDTORequestResponseFromJSON,
    BriefUserDTORequestResponseToJSON,
    GuidICollectionRequestResponseFromJSON,
    GuidICollectionRequestResponseToJSON,
    GuidRequestResponseFromJSON,
    GuidRequestResponseToJSON,
    RequestResponseFromJSON,
    RequestResponseToJSON,
    UserAddDTOFromJSON,
    UserAddDTOToJSON,
    UserDTORequestResponseFromJSON,
    UserDTORequestResponseToJSON,
    UserUpdateDTOFromJSON,
    UserUpdateDTOToJSON,
    VendorUserAddDTOFromJSON,
    VendorUserAddDTOToJSON,
} from '../models';

export interface ApiUserAddEnterpriseUserPostRequest {
    vendorUserAddDTO?: VendorUserAddDTO;
}

export interface ApiUserAddPostRequest {
    userAddDTO?: UserAddDTO;
}

export interface ApiUserDeleteIdDeleteRequest {
    id: string;
}

export interface ApiUserGetByIdIdGetRequest {
    id: string;
}

export interface ApiUserGetCartByIdIdGetRequest {
    id: string;
}

export interface ApiUserGetOrdersIdsByIdIdGetRequest {
    id: string;
}

export interface ApiUserUpdatePutRequest {
    userUpdateDTO?: UserUpdateDTO;
}

/**
 * 
 */
export class UserApi extends runtime.BaseAPI {

    /**
     */
    async apiUserAddEnterpriseUserPostRaw(requestParameters: ApiUserAddEnterpriseUserPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BriefUserDTORequestResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/User/AddEnterpriseUser`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: VendorUserAddDTOToJSON(requestParameters.vendorUserAddDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BriefUserDTORequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiUserAddEnterpriseUserPost(requestParameters: ApiUserAddEnterpriseUserPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BriefUserDTORequestResponse> {
        const response = await this.apiUserAddEnterpriseUserPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiUserAddPostRaw(requestParameters: ApiUserAddPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BriefUserDTORequestResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/User/Add`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserAddDTOToJSON(requestParameters.userAddDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BriefUserDTORequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiUserAddPost(requestParameters: ApiUserAddPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BriefUserDTORequestResponse> {
        const response = await this.apiUserAddPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiUserDeleteIdDeleteRaw(requestParameters: ApiUserDeleteIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiUserDeleteIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/User/Delete/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiUserDeleteIdDelete(requestParameters: ApiUserDeleteIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiUserDeleteIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiUserGetByIdIdGetRaw(requestParameters: ApiUserGetByIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDTORequestResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiUserGetByIdIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/User/GetById/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDTORequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiUserGetByIdIdGet(requestParameters: ApiUserGetByIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDTORequestResponse> {
        const response = await this.apiUserGetByIdIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiUserGetCartByIdIdGetRaw(requestParameters: ApiUserGetCartByIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GuidRequestResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiUserGetCartByIdIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/User/GetCartById/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GuidRequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiUserGetCartByIdIdGet(requestParameters: ApiUserGetCartByIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GuidRequestResponse> {
        const response = await this.apiUserGetCartByIdIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiUserGetOrdersIdsByIdIdGetRaw(requestParameters: ApiUserGetOrdersIdsByIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GuidICollectionRequestResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiUserGetOrdersIdsByIdIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/User/GetOrdersIdsById/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GuidICollectionRequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiUserGetOrdersIdsByIdIdGet(requestParameters: ApiUserGetOrdersIdsByIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GuidICollectionRequestResponse> {
        const response = await this.apiUserGetOrdersIdsByIdIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiUserUpdatePutRaw(requestParameters: ApiUserUpdatePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/User/Update`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UserUpdateDTOToJSON(requestParameters.userUpdateDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiUserUpdatePut(requestParameters: ApiUserUpdatePutRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiUserUpdatePutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
