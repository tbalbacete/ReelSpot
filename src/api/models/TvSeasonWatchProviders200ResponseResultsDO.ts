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
 * @interface TvSeasonWatchProviders200ResponseResultsDO
 */
export interface TvSeasonWatchProviders200ResponseResultsDO {
    /**
     * 
     * @type {any}
     * @memberof TvSeasonWatchProviders200ResponseResultsDO
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeasonWatchProviders200ResponseResultsDO
     */
    flatrate?: any | null;
}

/**
 * Check if a given object implements the TvSeasonWatchProviders200ResponseResultsDO interface.
 */
export function instanceOfTvSeasonWatchProviders200ResponseResultsDO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TvSeasonWatchProviders200ResponseResultsDOFromJSON(json: any): TvSeasonWatchProviders200ResponseResultsDO {
    return TvSeasonWatchProviders200ResponseResultsDOFromJSONTyped(json, false);
}

export function TvSeasonWatchProviders200ResponseResultsDOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeasonWatchProviders200ResponseResultsDO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'flatrate': !exists(json, 'flatrate') ? undefined : json['flatrate'],
    };
}

export function TvSeasonWatchProviders200ResponseResultsDOToJSON(value?: TvSeasonWatchProviders200ResponseResultsDO | null): any {
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
