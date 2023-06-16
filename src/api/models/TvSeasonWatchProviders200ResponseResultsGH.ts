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
 * @interface TvSeasonWatchProviders200ResponseResultsGH
 */
export interface TvSeasonWatchProviders200ResponseResultsGH {
    /**
     * 
     * @type {any}
     * @memberof TvSeasonWatchProviders200ResponseResultsGH
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeasonWatchProviders200ResponseResultsGH
     */
    flatrate?: any | null;
}

/**
 * Check if a given object implements the TvSeasonWatchProviders200ResponseResultsGH interface.
 */
export function instanceOfTvSeasonWatchProviders200ResponseResultsGH(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TvSeasonWatchProviders200ResponseResultsGHFromJSON(json: any): TvSeasonWatchProviders200ResponseResultsGH {
    return TvSeasonWatchProviders200ResponseResultsGHFromJSONTyped(json, false);
}

export function TvSeasonWatchProviders200ResponseResultsGHFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeasonWatchProviders200ResponseResultsGH {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'flatrate': !exists(json, 'flatrate') ? undefined : json['flatrate'],
    };
}

export function TvSeasonWatchProviders200ResponseResultsGHToJSON(value?: TvSeasonWatchProviders200ResponseResultsGH | null): any {
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

