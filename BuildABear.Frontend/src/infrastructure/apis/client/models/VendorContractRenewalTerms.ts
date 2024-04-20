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


/**
 * 
 * @export
 */
export const VendorContractRenewalTerms = {
    Annual: 'Annual',
    Biennial: 'Biennial',
    OnDemand: 'OnDemand',
    AutoRenew: 'AutoRenew',
    Monthly: 'Monthly'
} as const;
export type VendorContractRenewalTerms = typeof VendorContractRenewalTerms[keyof typeof VendorContractRenewalTerms];


export function VendorContractRenewalTermsFromJSON(json: any): VendorContractRenewalTerms {
    return VendorContractRenewalTermsFromJSONTyped(json, false);
}

export function VendorContractRenewalTermsFromJSONTyped(json: any, ignoreDiscriminator: boolean): VendorContractRenewalTerms {
    return json as VendorContractRenewalTerms;
}

export function VendorContractRenewalTermsToJSON(value?: VendorContractRenewalTerms | null): any {
    return value as any;
}

