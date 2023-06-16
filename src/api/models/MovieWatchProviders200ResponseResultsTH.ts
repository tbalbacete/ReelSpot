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
 * @interface MovieWatchProviders200ResponseResultsTH
 */
export interface MovieWatchProviders200ResponseResultsTH {
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsTH
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsTH
     */
    flatrate?: any | null;
}

/**
 * Check if a given object implements the MovieWatchProviders200ResponseResultsTH interface.
 */
export function instanceOfMovieWatchProviders200ResponseResultsTH(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MovieWatchProviders200ResponseResultsTHFromJSON(json: any): MovieWatchProviders200ResponseResultsTH {
    return MovieWatchProviders200ResponseResultsTHFromJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsTHFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieWatchProviders200ResponseResultsTH {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'flatrate': !exists(json, 'flatrate') ? undefined : json['flatrate'],
    };
}

export function MovieWatchProviders200ResponseResultsTHToJSON(value?: MovieWatchProviders200ResponseResultsTH | null): any {
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

