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
import type { TeddyViewDTOPagedResponse } from './TeddyViewDTOPagedResponse';
import {
    TeddyViewDTOPagedResponseFromJSON,
    TeddyViewDTOPagedResponseFromJSONTyped,
    TeddyViewDTOPagedResponseToJSON,
} from './TeddyViewDTOPagedResponse';

/**
 * 
 * @export
 * @interface TeddyViewDTOPagedResponseRequestResponse
 */
export interface TeddyViewDTOPagedResponseRequestResponse {
    /**
     * 
     * @type {TeddyViewDTOPagedResponse}
     * @memberof TeddyViewDTOPagedResponseRequestResponse
     */
    response?: TeddyViewDTOPagedResponse;
    /**
     * 
     * @type {ErrorMessage}
     * @memberof TeddyViewDTOPagedResponseRequestResponse
     */
    errorMessage?: ErrorMessage;
}

/**
 * Check if a given object implements the TeddyViewDTOPagedResponseRequestResponse interface.
 */
export function instanceOfTeddyViewDTOPagedResponseRequestResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TeddyViewDTOPagedResponseRequestResponseFromJSON(json: any): TeddyViewDTOPagedResponseRequestResponse {
    return TeddyViewDTOPagedResponseRequestResponseFromJSONTyped(json, false);
}

export function TeddyViewDTOPagedResponseRequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeddyViewDTOPagedResponseRequestResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'response': !exists(json, 'response') ? undefined : TeddyViewDTOPagedResponseFromJSON(json['response']),
        'errorMessage': !exists(json, 'errorMessage') ? undefined : ErrorMessageFromJSON(json['errorMessage']),
    };
}

export function TeddyViewDTOPagedResponseRequestResponseToJSON(value?: TeddyViewDTOPagedResponseRequestResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'response': TeddyViewDTOPagedResponseToJSON(value.response),
        'errorMessage': ErrorMessageToJSON(value.errorMessage),
    };
}
