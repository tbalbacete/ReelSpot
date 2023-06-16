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
 * @interface WatchProvidersMovieList200Response
 */
export interface WatchProvidersMovieList200Response {
    /**
     * 
     * @type {any}
     * @memberof WatchProvidersMovieList200Response
     */
    results?: any | null;
}

/**
 * Check if a given object implements the WatchProvidersMovieList200Response interface.
 */
export function instanceOfWatchProvidersMovieList200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WatchProvidersMovieList200ResponseFromJSON(json: any): WatchProvidersMovieList200Response {
    return WatchProvidersMovieList200ResponseFromJSONTyped(json, false);
}

export function WatchProvidersMovieList200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WatchProvidersMovieList200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'results': !exists(json, 'results') ? undefined : json['results'],
    };
}

export function WatchProvidersMovieList200ResponseToJSON(value?: WatchProvidersMovieList200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'results': value.results,
    };
}

