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
 * @interface TvSeriesWatchProviders200ResponseResultsGB
 */
export interface TvSeriesWatchProviders200ResponseResultsGB {
    /**
     * 
     * @type {any}
     * @memberof TvSeriesWatchProviders200ResponseResultsGB
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesWatchProviders200ResponseResultsGB
     */
    flatrate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesWatchProviders200ResponseResultsGB
     */
    buy?: any | null;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsGB interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsGB(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TvSeriesWatchProviders200ResponseResultsGBFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsGB {
    return TvSeriesWatchProviders200ResponseResultsGBFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsGBFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsGB {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'flatrate': !exists(json, 'flatrate') ? undefined : json['flatrate'],
        'buy': !exists(json, 'buy') ? undefined : json['buy'],
    };
}

export function TvSeriesWatchProviders200ResponseResultsGBToJSON(value?: TvSeriesWatchProviders200ResponseResultsGB | null): any {
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

