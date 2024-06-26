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

import { exists, mapValues } from '../runtime';
import type { ErrorMessage } from './ErrorMessage';
import {
    ErrorMessageFromJSON,
    ErrorMessageFromJSONTyped,
    ErrorMessageToJSON,
} from './ErrorMessage';

/**
 * 
 * @export
 * @interface GuidRequestResponse
 */
export interface GuidRequestResponse {
    /**
     * 
     * @type {string}
     * @memberof GuidRequestResponse
     */
    readonly response?: string;
    /**
     * 
     * @type {ErrorMessage}
     * @memberof GuidRequestResponse
     */
    errorMessage?: ErrorMessage;
}

/**
 * Check if a given object implements the GuidRequestResponse interface.
 */
export function instanceOfGuidRequestResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GuidRequestResponseFromJSON(json: any): GuidRequestResponse {
    return GuidRequestResponseFromJSONTyped(json, false);
}

export function GuidRequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuidRequestResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'response': !exists(json, 'response') ? undefined : json['response'],
        'errorMessage': !exists(json, 'errorMessage') ? undefined : ErrorMessageFromJSON(json['errorMessage']),
    };
}

export function GuidRequestResponseToJSON(value?: GuidRequestResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errorMessage': ErrorMessageToJSON(value.errorMessage),
    };
}

