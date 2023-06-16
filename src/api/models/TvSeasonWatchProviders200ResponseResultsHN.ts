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
 * @interface TvSeasonWatchProviders200ResponseResultsHN
 */
export interface TvSeasonWatchProviders200ResponseResultsHN {
    /**
     * 
     * @type {any}
     * @memberof TvSeasonWatchProviders200ResponseResultsHN
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeasonWatchProviders200ResponseResultsHN
     */
    flatrate?: any | null;
}

/**
 * Check if a given object implements the TvSeasonWatchProviders200ResponseResultsHN interface.
 */
export function instanceOfTvSeasonWatchProviders200ResponseResultsHN(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TvSeasonWatchProviders200ResponseResultsHNFromJSON(json: any): TvSeasonWatchProviders200ResponseResultsHN {
    return TvSeasonWatchProviders200ResponseResultsHNFromJSONTyped(json, false);
}

export function TvSeasonWatchProviders200ResponseResultsHNFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeasonWatchProviders200ResponseResultsHN {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'flatrate': !exists(json, 'flatrate') ? undefined : json['flatrate'],
    };
}

export function TvSeasonWatchProviders200ResponseResultsHNToJSON(value?: TvSeasonWatchProviders200ResponseResultsHN | null): any {
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

