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
 * @interface TvSeasonWatchProviders200ResponseResultsAU
 */
export interface TvSeasonWatchProviders200ResponseResultsAU {
    /**
     * 
     * @type {any}
     * @memberof TvSeasonWatchProviders200ResponseResultsAU
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeasonWatchProviders200ResponseResultsAU
     */
    buy?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeasonWatchProviders200ResponseResultsAU
     */
    flatrate?: any | null;
}

/**
 * Check if a given object implements the TvSeasonWatchProviders200ResponseResultsAU interface.
 */
export function instanceOfTvSeasonWatchProviders200ResponseResultsAU(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TvSeasonWatchProviders200ResponseResultsAUFromJSON(json: any): TvSeasonWatchProviders200ResponseResultsAU {
    return TvSeasonWatchProviders200ResponseResultsAUFromJSONTyped(json, false);
}

export function TvSeasonWatchProviders200ResponseResultsAUFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeasonWatchProviders200ResponseResultsAU {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'buy': !exists(json, 'buy') ? undefined : json['buy'],
        'flatrate': !exists(json, 'flatrate') ? undefined : json['flatrate'],
    };
}

export function TvSeasonWatchProviders200ResponseResultsAUToJSON(value?: TvSeasonWatchProviders200ResponseResultsAU | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'link': value.link,
        'buy': value.buy,
        'flatrate': value.flatrate,
    };
}

