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
 * @interface MovieWatchProviders200ResponseResultsAU
 */
export interface MovieWatchProviders200ResponseResultsAU {
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsAU
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsAU
     */
    flatrate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsAU
     */
    buy?: any | null;
}

/**
 * Check if a given object implements the MovieWatchProviders200ResponseResultsAU interface.
 */
export function instanceOfMovieWatchProviders200ResponseResultsAU(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MovieWatchProviders200ResponseResultsAUFromJSON(json: any): MovieWatchProviders200ResponseResultsAU {
    return MovieWatchProviders200ResponseResultsAUFromJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsAUFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieWatchProviders200ResponseResultsAU {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'flatrate': !exists(json, 'flatrate') ? undefined : json['flatrate'],
        'buy': !exists(json, 'buy') ? undefined : json['buy'],
    };
}

export function MovieWatchProviders200ResponseResultsAUToJSON(value?: MovieWatchProviders200ResponseResultsAU | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'link': value.link,
        'flatrate': value.flatrate,
        'buy': value.buy,
    };
}

