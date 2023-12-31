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
 * @interface TvSeriesWatchProviders200ResponseResultsJP
 */
export interface TvSeriesWatchProviders200ResponseResultsJP {
    /**
     * 
     * @type {any}
     * @memberof TvSeriesWatchProviders200ResponseResultsJP
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesWatchProviders200ResponseResultsJP
     */
    flatrate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesWatchProviders200ResponseResultsJP
     */
    buy?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesWatchProviders200ResponseResultsJP
     */
    rent?: any | null;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsJP interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsJP(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TvSeriesWatchProviders200ResponseResultsJPFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsJP {
    return TvSeriesWatchProviders200ResponseResultsJPFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsJPFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsJP {
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

export function TvSeriesWatchProviders200ResponseResultsJPToJSON(value?: TvSeriesWatchProviders200ResponseResultsJP | null): any {
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

