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
import type { FeedbackGrade } from './FeedbackGrade';
import {
    FeedbackGradeFromJSON,
    FeedbackGradeFromJSONTyped,
    FeedbackGradeToJSON,
} from './FeedbackGrade';
import type { FeedbackServiceAction } from './FeedbackServiceAction';
import {
    FeedbackServiceActionFromJSON,
    FeedbackServiceActionFromJSONTyped,
    FeedbackServiceActionToJSON,
} from './FeedbackServiceAction';

/**
 * 
 * @export
 * @interface FeedbackDTO
 */
export interface FeedbackDTO {
    /**
     * 
     * @type {string}
     * @memberof FeedbackDTO
     */
    comments?: string | null;
    /**
     * 
     * @type {FeedbackGrade}
     * @memberof FeedbackDTO
     */
    feedbackGrade?: FeedbackGrade;
    /**
     * 
     * @type {FeedbackServiceAction}
     * @memberof FeedbackDTO
     */
    feedbackServiceAction?: FeedbackServiceAction;
    /**
     * 
     * @type {boolean}
     * @memberof FeedbackDTO
     */
    contact?: boolean;
}

/**
 * Check if a given object implements the FeedbackDTO interface.
 */
export function instanceOfFeedbackDTO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FeedbackDTOFromJSON(json: any): FeedbackDTO {
    return FeedbackDTOFromJSONTyped(json, false);
}

export function FeedbackDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeedbackDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'comments': !exists(json, 'comments') ? undefined : json['comments'],
        'feedbackGrade': !exists(json, 'feedbackGrade') ? undefined : FeedbackGradeFromJSON(json['feedbackGrade']),
        'feedbackServiceAction': !exists(json, 'feedbackServiceAction') ? undefined : FeedbackServiceActionFromJSON(json['feedbackServiceAction']),
        'contact': !exists(json, 'contact') ? undefined : json['contact'],
    };
}

export function FeedbackDTOToJSON(value?: FeedbackDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'comments': value.comments,
        'feedbackGrade': FeedbackGradeToJSON(value.feedbackGrade),
        'feedbackServiceAction': FeedbackServiceActionToJSON(value.feedbackServiceAction),
        'contact': value.contact,
    };
}

