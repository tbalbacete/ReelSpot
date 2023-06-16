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
 * @interface MovieWatchProviders200ResponseResultsIE
 */
export interface MovieWatchProviders200ResponseResultsIE {
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsIE
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsIE
     */
    rent?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsIE
     */
    flatrate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsIE
     */
    buy?: any | null;
}

/**
 * Check if a given object implements the MovieWatchProviders200ResponseResultsIE interface.
 */
export function instanceOfMovieWatchProviders200ResponseResultsIE(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MovieWatchProviders200ResponseResultsIEFromJSON(json: any): MovieWatchProviders200ResponseResultsIE {
    return MovieWatchProviders200ResponseResultsIEFromJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsIEFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieWatchProviders200ResponseResultsIE {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'rent': !exists(json, 'rent') ? undefined : json['rent'],
        'flatrate': !exists(json, 'flatrate') ? undefined : json['flatrate'],
        'buy': !exists(json, 'buy') ? undefined : json['buy'],
    };
}

export function MovieWatchProviders200ResponseResultsIEToJSON(value?: MovieWatchProviders200ResponseResultsIE | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'link': value.link,
        'rent': value.rent,
        'flatrate': value.flatrate,
        'buy': value.buy,
    };
}

