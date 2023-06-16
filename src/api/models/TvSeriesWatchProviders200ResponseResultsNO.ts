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
 * @interface TvSeriesWatchProviders200ResponseResultsNO
 */
export interface TvSeriesWatchProviders200ResponseResultsNO {
    /**
     * 
     * @type {any}
     * @memberof TvSeriesWatchProviders200ResponseResultsNO
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesWatchProviders200ResponseResultsNO
     */
    flatrate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesWatchProviders200ResponseResultsNO
     */
    buy?: any | null;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsNO interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsNO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TvSeriesWatchProviders200ResponseResultsNOFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsNO {
    return TvSeriesWatchProviders200ResponseResultsNOFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsNOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsNO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'flatrate': !exists(json, 'flatrate') ? undefined : json['flatrate'],
        'buy': !exists(json, 'buy') ? undefined : json['buy'],
    };
}

export function TvSeriesWatchProviders200ResponseResultsNOToJSON(value?: TvSeriesWatchProviders200ResponseResultsNO | null): any {
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
