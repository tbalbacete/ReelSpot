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
 * @interface TvSeriesWatchProviders200ResponseResultsBO
 */
export interface TvSeriesWatchProviders200ResponseResultsBO {
    /**
     * 
     * @type {any}
     * @memberof TvSeriesWatchProviders200ResponseResultsBO
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesWatchProviders200ResponseResultsBO
     */
    flatrate?: any | null;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsBO interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsBO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TvSeriesWatchProviders200ResponseResultsBOFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsBO {
    return TvSeriesWatchProviders200ResponseResultsBOFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsBOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsBO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'flatrate': !exists(json, 'flatrate') ? undefined : json['flatrate'],
    };
}

export function TvSeriesWatchProviders200ResponseResultsBOToJSON(value?: TvSeriesWatchProviders200ResponseResultsBO | null): any {
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

