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
 * @interface TvSeriesWatchProviders200ResponseResultsPS
 */
export interface TvSeriesWatchProviders200ResponseResultsPS {
    /**
     * 
     * @type {any}
     * @memberof TvSeriesWatchProviders200ResponseResultsPS
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesWatchProviders200ResponseResultsPS
     */
    flatrate?: any | null;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsPS interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsPS(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TvSeriesWatchProviders200ResponseResultsPSFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsPS {
    return TvSeriesWatchProviders200ResponseResultsPSFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsPSFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsPS {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'flatrate': !exists(json, 'flatrate') ? undefined : json['flatrate'],
    };
}

export function TvSeriesWatchProviders200ResponseResultsPSToJSON(value?: TvSeriesWatchProviders200ResponseResultsPS | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'link': value.link,
        'flatrate': value.flatrate,
    };
}
