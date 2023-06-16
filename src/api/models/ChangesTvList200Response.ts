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
 * @interface ChangesTvList200Response
 */
export interface ChangesTvList200Response {
    /**
     * 
     * @type {any}
     * @memberof ChangesTvList200Response
     */
    results?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ChangesTvList200Response
     */
    page?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ChangesTvList200Response
     */
    totalPages?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ChangesTvList200Response
     */
    totalResults?: any | null;
}

/**
 * Check if a given object implements the ChangesTvList200Response interface.
 */
export function instanceOfChangesTvList200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChangesTvList200ResponseFromJSON(json: any): ChangesTvList200Response {
    return ChangesTvList200ResponseFromJSONTyped(json, false);
}

export function ChangesTvList200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangesTvList200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'results': !exists(json, 'results') ? undefined : json['results'],
        'page': !exists(json, 'page') ? undefined : json['page'],
        'totalPages': !exists(json, 'total_pages') ? undefined : json['total_pages'],
        'totalResults': !exists(json, 'total_results') ? undefined : json['total_results'],
    };
}

export function ChangesTvList200ResponseToJSON(value?: ChangesTvList200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'results': value.results,
        'page': value.page,
        'total_pages': value.totalPages,
        'total_results': value.totalResults,
    };
}

