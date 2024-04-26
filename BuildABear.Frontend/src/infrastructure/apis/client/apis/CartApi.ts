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
  Int32RequestResponse,
  TeddyViewDTOPagedResponseRequestResponse,
} from '../models';
import {
    Int32RequestResponseFromJSON,
    Int32RequestResponseToJSON,
    TeddyViewDTOPagedResponseRequestResponseFromJSON,
    TeddyViewDTOPagedResponseRequestResponseToJSON,
} from '../models';

export interface ApiCartGetByCartIdIdGetRequest {
    id: string;
    page?: number;
    pageSize?: number;
}

export interface ApiCartGetByUserIdIdGetRequest {
    id: string;
    page?: number;
    pageSize?: number;
}

export interface ApiCartGetCartPriceByCartIdIdGetRequest {
    id: string;
}

export interface ApiCartGetCartPriceByUserIdIdGetRequest {
    id: string;
}

/**
 * 
 */
export class CartApi extends runtime.BaseAPI {

    /**
     */
    async apiCartGetByCartIdIdGetRaw(requestParameters: ApiCartGetByCartIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TeddyViewDTOPagedResponseRequestResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiCartGetByCartIdIdGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['Page'] = requestParameters.page;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['PageSize'] = requestParameters.pageSize;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Cart/GetByCartId/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TeddyViewDTOPagedResponseRequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiCartGetByCartIdIdGet(requestParameters: ApiCartGetByCartIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TeddyViewDTOPagedResponseRequestResponse> {
        const response = await this.apiCartGetByCartIdIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiCartGetByUserIdIdGetRaw(requestParameters: ApiCartGetByUserIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TeddyViewDTOPagedResponseRequestResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiCartGetByUserIdIdGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['Page'] = requestParameters.page;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['PageSize'] = requestParameters.pageSize;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Cart/GetByUserId/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TeddyViewDTOPagedResponseRequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiCartGetByUserIdIdGet(requestParameters: ApiCartGetByUserIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TeddyViewDTOPagedResponseRequestResponse> {
        const response = await this.apiCartGetByUserIdIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiCartGetCartPriceByCartIdIdGetRaw(requestParameters: ApiCartGetCartPriceByCartIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Int32RequestResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiCartGetCartPriceByCartIdIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Cart/GetCartPriceByCartId/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Int32RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiCartGetCartPriceByCartIdIdGet(requestParameters: ApiCartGetCartPriceByCartIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Int32RequestResponse> {
        const response = await this.apiCartGetCartPriceByCartIdIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiCartGetCartPriceByUserIdIdGetRaw(requestParameters: ApiCartGetCartPriceByUserIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Int32RequestResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiCartGetCartPriceByUserIdIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Cart/GetCartPriceByUserId/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Int32RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiCartGetCartPriceByUserIdIdGet(requestParameters: ApiCartGetCartPriceByUserIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Int32RequestResponse> {
        const response = await this.apiCartGetCartPriceByUserIdIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiCartGetCartPriceGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Int32RequestResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Cart/GetCartPrice`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Int32RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiCartGetCartPriceGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Int32RequestResponse> {
        const response = await this.apiCartGetCartPriceGetRaw(initOverrides);
        return await response.value();
    }

}
