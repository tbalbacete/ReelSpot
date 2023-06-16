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
 * @interface MovieWatchProviders200ResponseResultsZA
 */
export interface MovieWatchProviders200ResponseResultsZA {
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsZA
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsZA
     */
    flatrate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsZA
     */
    rent?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsZA
     */
    buy?: any | null;
}

/**
 * Check if a given object implements the MovieWatchProviders200ResponseResultsZA interface.
 */
export function instanceOfMovieWatchProviders200ResponseResultsZA(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MovieWatchProviders200ResponseResultsZAFromJSON(json: any): MovieWatchProviders200ResponseResultsZA {
    return MovieWatchProviders200ResponseResultsZAFromJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsZAFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieWatchProviders200ResponseResultsZA {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'flatrate': !exists(json, 'flatrate') ? undefined : json['flatrate'],
        'rent': !exists(json, 'rent') ? undefined : json['rent'],
        'buy': !exists(json, 'buy') ? undefined : json['buy'],
    };
}

export function MovieWatchProviders200ResponseResultsZAToJSON(value?: MovieWatchProviders200ResponseResultsZA | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'link': value.link,
        'flatrate': value.flatrate,
        'rent': value.rent,
        'buy': value.buy,
    };
}

