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
/**
 * 
 * @export
 * @interface VendorEmail
 */
export interface VendorEmail {
    /**
     * 
     * @type {string}
     * @memberof VendorEmail
     */
    email?: string | null;
}

/**
 * Check if a given object implements the VendorEmail interface.
 */
export function instanceOfVendorEmail(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VendorEmailFromJSON(json: any): VendorEmail {
    return VendorEmailFromJSONTyped(json, false);
}

export function VendorEmailFromJSONTyped(json: any, ignoreDiscriminator: boolean): VendorEmail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
    };
}

export function VendorEmailToJSON(value?: VendorEmail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
    };
}
