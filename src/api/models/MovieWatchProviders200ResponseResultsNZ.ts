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
 * @interface MovieWatchProviders200ResponseResultsNZ
 */
export interface MovieWatchProviders200ResponseResultsNZ {
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsNZ
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsNZ
     */
    flatrate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsNZ
     */
    buy?: any | null;
}

/**
 * Check if a given object implements the MovieWatchProviders200ResponseResultsNZ interface.
 */
export function instanceOfMovieWatchProviders200ResponseResultsNZ(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MovieWatchProviders200ResponseResultsNZFromJSON(json: any): MovieWatchProviders200ResponseResultsNZ {
    return MovieWatchProviders200ResponseResultsNZFromJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsNZFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieWatchProviders200ResponseResultsNZ {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'flatrate': !exists(json, 'flatrate') ? undefined : json['flatrate'],
        'buy': !exists(json, 'buy') ? undefined : json['buy'],
    };
}

export function MovieWatchProviders200ResponseResultsNZToJSON(value?: MovieWatchProviders200ResponseResultsNZ | null): any {
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

