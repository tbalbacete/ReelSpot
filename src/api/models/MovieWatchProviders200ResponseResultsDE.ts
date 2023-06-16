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
 * @interface MovieWatchProviders200ResponseResultsDE
 */
export interface MovieWatchProviders200ResponseResultsDE {
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsDE
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsDE
     */
    flatrate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsDE
     */
    buy?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsDE
     */
    rent?: any | null;
}

/**
 * Check if a given object implements the MovieWatchProviders200ResponseResultsDE interface.
 */
export function instanceOfMovieWatchProviders200ResponseResultsDE(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MovieWatchProviders200ResponseResultsDEFromJSON(json: any): MovieWatchProviders200ResponseResultsDE {
    return MovieWatchProviders200ResponseResultsDEFromJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsDEFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieWatchProviders200ResponseResultsDE {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'flatrate': !exists(json, 'flatrate') ? undefined : json['flatrate'],
        'buy': !exists(json, 'buy') ? undefined : json['buy'],
        'rent': !exists(json, 'rent') ? undefined : json['rent'],
    };
}

export function MovieWatchProviders200ResponseResultsDEToJSON(value?: MovieWatchProviders200ResponseResultsDE | null): any {
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
        'rent': value.rent,
    };
}

