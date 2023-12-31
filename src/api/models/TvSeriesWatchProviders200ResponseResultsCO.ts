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
 * @interface TvSeriesWatchProviders200ResponseResultsCO
 */
export interface TvSeriesWatchProviders200ResponseResultsCO {
    /**
     * 
     * @type {any}
     * @memberof TvSeriesWatchProviders200ResponseResultsCO
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesWatchProviders200ResponseResultsCO
     */
    flatrate?: any | null;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsCO interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsCO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TvSeriesWatchProviders200ResponseResultsCOFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsCO {
    return TvSeriesWatchProviders200ResponseResultsCOFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsCOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsCO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'flatrate': !exists(json, 'flatrate') ? undefined : json['flatrate'],
    };
}

export function TvSeriesWatchProviders200ResponseResultsCOToJSON(value?: TvSeriesWatchProviders200ResponseResultsCO | null): any {
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

