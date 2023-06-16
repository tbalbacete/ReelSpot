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
 * @interface MovieWatchProviders200ResponseResultsLT
 */
export interface MovieWatchProviders200ResponseResultsLT {
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsLT
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsLT
     */
    rent?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsLT
     */
    buy?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsLT
     */
    flatrate?: any | null;
}

/**
 * Check if a given object implements the MovieWatchProviders200ResponseResultsLT interface.
 */
export function instanceOfMovieWatchProviders200ResponseResultsLT(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MovieWatchProviders200ResponseResultsLTFromJSON(json: any): MovieWatchProviders200ResponseResultsLT {
    return MovieWatchProviders200ResponseResultsLTFromJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsLTFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieWatchProviders200ResponseResultsLT {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'rent': !exists(json, 'rent') ? undefined : json['rent'],
        'buy': !exists(json, 'buy') ? undefined : json['buy'],
        'flatrate': !exists(json, 'flatrate') ? undefined : json['flatrate'],
    };
}

export function MovieWatchProviders200ResponseResultsLTToJSON(value?: MovieWatchProviders200ResponseResultsLT | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'link': value.link,
        'rent': value.rent,
        'buy': value.buy,
        'flatrate': value.flatrate,
    };
}
