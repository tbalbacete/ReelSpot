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
 * @interface TvSeriesWatchProviders200ResponseResultsIT
 */
export interface TvSeriesWatchProviders200ResponseResultsIT {
    /**
     * 
     * @type {any}
     * @memberof TvSeriesWatchProviders200ResponseResultsIT
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesWatchProviders200ResponseResultsIT
     */
    buy?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesWatchProviders200ResponseResultsIT
     */
    flatrate?: any | null;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsIT interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsIT(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TvSeriesWatchProviders200ResponseResultsITFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsIT {
    return TvSeriesWatchProviders200ResponseResultsITFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsITFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsIT {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'buy': !exists(json, 'buy') ? undefined : json['buy'],
        'flatrate': !exists(json, 'flatrate') ? undefined : json['flatrate'],
    };
}

export function TvSeriesWatchProviders200ResponseResultsITToJSON(value?: TvSeriesWatchProviders200ResponseResultsIT | null): any {
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

