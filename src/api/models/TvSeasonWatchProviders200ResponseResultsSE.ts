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
 * @interface TvSeasonWatchProviders200ResponseResultsSE
 */
export interface TvSeasonWatchProviders200ResponseResultsSE {
    /**
     * 
     * @type {any}
     * @memberof TvSeasonWatchProviders200ResponseResultsSE
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeasonWatchProviders200ResponseResultsSE
     */
    flatrate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeasonWatchProviders200ResponseResultsSE
     */
    buy?: any | null;
}

/**
 * Check if a given object implements the TvSeasonWatchProviders200ResponseResultsSE interface.
 */
export function instanceOfTvSeasonWatchProviders200ResponseResultsSE(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TvSeasonWatchProviders200ResponseResultsSEFromJSON(json: any): TvSeasonWatchProviders200ResponseResultsSE {
    return TvSeasonWatchProviders200ResponseResultsSEFromJSONTyped(json, false);
}

export function TvSeasonWatchProviders200ResponseResultsSEFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeasonWatchProviders200ResponseResultsSE {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'flatrate': !exists(json, 'flatrate') ? undefined : json['flatrate'],
        'buy': !exists(json, 'buy') ? undefined : json['buy'],
    };
}

export function TvSeasonWatchProviders200ResponseResultsSEToJSON(value?: TvSeasonWatchProviders200ResponseResultsSE | null): any {
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

