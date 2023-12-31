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
 * @interface MovieCredits200Response
 */
export interface MovieCredits200Response {
    /**
     * 
     * @type {any}
     * @memberof MovieCredits200Response
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieCredits200Response
     */
    cast?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieCredits200Response
     */
    crew?: any | null;
}

/**
 * Check if a given object implements the MovieCredits200Response interface.
 */
export function instanceOfMovieCredits200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MovieCredits200ResponseFromJSON(json: any): MovieCredits200Response {
    return MovieCredits200ResponseFromJSONTyped(json, false);
}

export function MovieCredits200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieCredits200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'cast': !exists(json, 'cast') ? undefined : json['cast'],
        'crew': !exists(json, 'crew') ? undefined : json['crew'],
    };
}

export function MovieCredits200ResponseToJSON(value?: MovieCredits200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'cast': value.cast,
        'crew': value.crew,
    };
}

