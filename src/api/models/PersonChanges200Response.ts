/* tslint:disable */
/* eslint-disable */
/**
 * TMDB API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3
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
 * @interface PersonChanges200Response
 */
export interface PersonChanges200Response {
    /**
     * 
     * @type {any}
     * @memberof PersonChanges200Response
     */
    changes?: any | null;
}

/**
 * Check if a given object implements the PersonChanges200Response interface.
 */
export function instanceOfPersonChanges200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PersonChanges200ResponseFromJSON(json: any): PersonChanges200Response {
    return PersonChanges200ResponseFromJSONTyped(json, false);
}

export function PersonChanges200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonChanges200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changes': !exists(json, 'changes') ? undefined : json['changes'],
    };
}

export function PersonChanges200ResponseToJSON(value?: PersonChanges200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changes': value.changes,
    };
}
