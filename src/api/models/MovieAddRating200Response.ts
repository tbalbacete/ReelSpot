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
 * @interface MovieAddRating200Response
 */
export interface MovieAddRating200Response {
    /**
     * 
     * @type {any}
     * @memberof MovieAddRating200Response
     */
    statusCode?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieAddRating200Response
     */
    statusMessage?: any | null;
}

/**
 * Check if a given object implements the MovieAddRating200Response interface.
 */
export function instanceOfMovieAddRating200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MovieAddRating200ResponseFromJSON(json: any): MovieAddRating200Response {
    return MovieAddRating200ResponseFromJSONTyped(json, false);
}

export function MovieAddRating200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieAddRating200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statusCode': !exists(json, 'status_code') ? undefined : json['status_code'],
        'statusMessage': !exists(json, 'status_message') ? undefined : json['status_message'],
    };
}

export function MovieAddRating200ResponseToJSON(value?: MovieAddRating200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status_code': value.statusCode,
        'status_message': value.statusMessage,
    };
}
