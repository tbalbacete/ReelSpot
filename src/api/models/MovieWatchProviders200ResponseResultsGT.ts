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
 * @interface MovieWatchProviders200ResponseResultsGT
 */
export interface MovieWatchProviders200ResponseResultsGT {
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsGT
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsGT
     */
    flatrate?: any | null;
}

/**
 * Check if a given object implements the MovieWatchProviders200ResponseResultsGT interface.
 */
export function instanceOfMovieWatchProviders200ResponseResultsGT(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MovieWatchProviders200ResponseResultsGTFromJSON(json: any): MovieWatchProviders200ResponseResultsGT {
    return MovieWatchProviders200ResponseResultsGTFromJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsGTFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieWatchProviders200ResponseResultsGT {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'flatrate': !exists(json, 'flatrate') ? undefined : json['flatrate'],
    };
}

export function MovieWatchProviders200ResponseResultsGTToJSON(value?: MovieWatchProviders200ResponseResultsGT | null): any {
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

