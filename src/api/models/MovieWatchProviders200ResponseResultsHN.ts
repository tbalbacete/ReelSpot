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
 * @interface MovieWatchProviders200ResponseResultsHN
 */
export interface MovieWatchProviders200ResponseResultsHN {
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsHN
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsHN
     */
    flatrate?: any | null;
}

/**
 * Check if a given object implements the MovieWatchProviders200ResponseResultsHN interface.
 */
export function instanceOfMovieWatchProviders200ResponseResultsHN(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MovieWatchProviders200ResponseResultsHNFromJSON(json: any): MovieWatchProviders200ResponseResultsHN {
    return MovieWatchProviders200ResponseResultsHNFromJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsHNFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieWatchProviders200ResponseResultsHN {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'flatrate': !exists(json, 'flatrate') ? undefined : json['flatrate'],
    };
}

export function MovieWatchProviders200ResponseResultsHNToJSON(value?: MovieWatchProviders200ResponseResultsHN | null): any {
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

