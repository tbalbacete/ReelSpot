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
 * @interface TvSeriesWatchProviders200ResponseResultsFR
 */
export interface TvSeriesWatchProviders200ResponseResultsFR {
    /**
     * 
     * @type {any}
     * @memberof TvSeriesWatchProviders200ResponseResultsFR
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesWatchProviders200ResponseResultsFR
     */
    buy?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesWatchProviders200ResponseResultsFR
     */
    flatrate?: any | null;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsFR interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsFR(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TvSeriesWatchProviders200ResponseResultsFRFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsFR {
    return TvSeriesWatchProviders200ResponseResultsFRFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsFRFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsFR {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'buy': !exists(json, 'buy') ? undefined : json['buy'],
        'flatrate': !exists(json, 'flatrate') ? undefined : json['flatrate'],
    };
}

export function TvSeriesWatchProviders200ResponseResultsFRToJSON(value?: TvSeriesWatchProviders200ResponseResultsFR | null): any {
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

