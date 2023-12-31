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
import type { TvSeasonWatchProviders200ResponseResults } from './TvSeasonWatchProviders200ResponseResults';
import {
    TvSeasonWatchProviders200ResponseResultsFromJSON,
    TvSeasonWatchProviders200ResponseResultsFromJSONTyped,
    TvSeasonWatchProviders200ResponseResultsToJSON,
} from './TvSeasonWatchProviders200ResponseResults';

/**
 * 
 * @export
 * @interface TvSeasonWatchProviders200Response
 */
export interface TvSeasonWatchProviders200Response {
    /**
     * 
     * @type {any}
     * @memberof TvSeasonWatchProviders200Response
     */
    id?: any | null;
    /**
     * 
     * @type {TvSeasonWatchProviders200ResponseResults}
     * @memberof TvSeasonWatchProviders200Response
     */
    results?: TvSeasonWatchProviders200ResponseResults;
}

/**
 * Check if a given object implements the TvSeasonWatchProviders200Response interface.
 */
export function instanceOfTvSeasonWatchProviders200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TvSeasonWatchProviders200ResponseFromJSON(json: any): TvSeasonWatchProviders200Response {
    return TvSeasonWatchProviders200ResponseFromJSONTyped(json, false);
}

export function TvSeasonWatchProviders200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeasonWatchProviders200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'results': !exists(json, 'results') ? undefined : TvSeasonWatchProviders200ResponseResultsFromJSON(json['results']),
    };
}

export function TvSeasonWatchProviders200ResponseToJSON(value?: TvSeasonWatchProviders200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'results': TvSeasonWatchProviders200ResponseResultsToJSON(value.results),
    };
}

