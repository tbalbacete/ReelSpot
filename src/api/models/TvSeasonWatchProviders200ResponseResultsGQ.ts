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
 * @interface TvSeasonWatchProviders200ResponseResultsGQ
 */
export interface TvSeasonWatchProviders200ResponseResultsGQ {
    /**
     * 
     * @type {any}
     * @memberof TvSeasonWatchProviders200ResponseResultsGQ
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeasonWatchProviders200ResponseResultsGQ
     */
    flatrate?: any | null;
}

/**
 * Check if a given object implements the TvSeasonWatchProviders200ResponseResultsGQ interface.
 */
export function instanceOfTvSeasonWatchProviders200ResponseResultsGQ(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TvSeasonWatchProviders200ResponseResultsGQFromJSON(json: any): TvSeasonWatchProviders200ResponseResultsGQ {
    return TvSeasonWatchProviders200ResponseResultsGQFromJSONTyped(json, false);
}

export function TvSeasonWatchProviders200ResponseResultsGQFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeasonWatchProviders200ResponseResultsGQ {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'flatrate': !exists(json, 'flatrate') ? undefined : json['flatrate'],
    };
}

export function TvSeasonWatchProviders200ResponseResultsGQToJSON(value?: TvSeasonWatchProviders200ResponseResultsGQ | null): any {
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
