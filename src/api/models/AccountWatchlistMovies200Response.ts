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
 * @interface AccountWatchlistMovies200Response
 */
export interface AccountWatchlistMovies200Response {
    /**
     * 
     * @type {any}
     * @memberof AccountWatchlistMovies200Response
     */
    page?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AccountWatchlistMovies200Response
     */
    results?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AccountWatchlistMovies200Response
     */
    totalPages?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AccountWatchlistMovies200Response
     */
    totalResults?: any | null;
}

/**
 * Check if a given object implements the AccountWatchlistMovies200Response interface.
 */
export function instanceOfAccountWatchlistMovies200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountWatchlistMovies200ResponseFromJSON(json: any): AccountWatchlistMovies200Response {
    return AccountWatchlistMovies200ResponseFromJSONTyped(json, false);
}

export function AccountWatchlistMovies200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountWatchlistMovies200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'page': !exists(json, 'page') ? undefined : json['page'],
        'results': !exists(json, 'results') ? undefined : json['results'],
        'totalPages': !exists(json, 'total_pages') ? undefined : json['total_pages'],
        'totalResults': !exists(json, 'total_results') ? undefined : json['total_results'],
    };
}

export function AccountWatchlistMovies200ResponseToJSON(value?: AccountWatchlistMovies200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'page': value.page,
        'results': value.results,
        'total_pages': value.totalPages,
        'total_results': value.totalResults,
    };
}

