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
import type { TeddyFillingEnum } from './TeddyFillingEnum';
import {
    TeddyFillingEnumFromJSON,
    TeddyFillingEnumFromJSONTyped,
    TeddyFillingEnumToJSON,
} from './TeddyFillingEnum';

/**
 * 
 * @export
 * @interface TeddyBuildDTO
 */
export interface TeddyBuildDTO {
    /**
     * 
     * @type {string}
     * @memberof TeddyBuildDTO
     */
    name?: string | null;
    /**
     * 
     * @type {TeddyFillingEnum}
     * @memberof TeddyBuildDTO
     */
    filling?: TeddyFillingEnum;
    /**
     * 
     * @type {string}
     * @memberof TeddyBuildDTO
     */
    teddyTemplateId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof TeddyBuildDTO
     */
    itemsIds?: Array<string> | null;
}

/**
 * Check if a given object implements the TeddyBuildDTO interface.
 */
export function instanceOfTeddyBuildDTO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TeddyBuildDTOFromJSON(json: any): TeddyBuildDTO {
    return TeddyBuildDTOFromJSONTyped(json, false);
}

export function TeddyBuildDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeddyBuildDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'filling': !exists(json, 'filling') ? undefined : TeddyFillingEnumFromJSON(json['filling']),
        'teddyTemplateId': !exists(json, 'teddyTemplateId') ? undefined : json['teddyTemplateId'],
        'itemsIds': !exists(json, 'itemsIds') ? undefined : json['itemsIds'],
    };
}

export function TeddyBuildDTOToJSON(value?: TeddyBuildDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'filling': TeddyFillingEnumToJSON(value.filling),
        'teddyTemplateId': value.teddyTemplateId,
        'itemsIds': value.itemsIds,
    };
}

