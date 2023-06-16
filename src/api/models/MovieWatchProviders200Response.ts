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
import type { MovieWatchProviders200ResponseResults } from './MovieWatchProviders200ResponseResults';
import {
    MovieWatchProviders200ResponseResultsFromJSON,
    MovieWatchProviders200ResponseResultsFromJSONTyped,
    MovieWatchProviders200ResponseResultsToJSON,
} from './MovieWatchProviders200ResponseResults';

/**
 * 
 * @export
 * @interface MovieWatchProviders200Response
 */
export interface MovieWatchProviders200Response {
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200Response
     */
    id?: any | null;
    /**
     * 
     * @type {MovieWatchProviders200ResponseResults}
     * @memberof MovieWatchProviders200Response
     */
    results?: MovieWatchProviders200ResponseResults;
}

/**
 * Check if a given object implements the MovieWatchProviders200Response interface.
 */
export function instanceOfMovieWatchProviders200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MovieWatchProviders200ResponseFromJSON(json: any): MovieWatchProviders200Response {
    return MovieWatchProviders200ResponseFromJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieWatchProviders200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'results': !exists(json, 'results') ? undefined : MovieWatchProviders200ResponseResultsFromJSON(json['results']),
    };
}

export function MovieWatchProviders200ResponseToJSON(value?: MovieWatchProviders200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'results': MovieWatchProviders200ResponseResultsToJSON(value.results),
    };
}
