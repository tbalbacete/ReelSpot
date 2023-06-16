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
 * @interface MovieWatchProviders200ResponseResultsCR
 */
export interface MovieWatchProviders200ResponseResultsCR {
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsCR
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsCR
     */
    flatrate?: any | null;
}

/**
 * Check if a given object implements the MovieWatchProviders200ResponseResultsCR interface.
 */
export function instanceOfMovieWatchProviders200ResponseResultsCR(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MovieWatchProviders200ResponseResultsCRFromJSON(json: any): MovieWatchProviders200ResponseResultsCR {
    return MovieWatchProviders200ResponseResultsCRFromJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsCRFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieWatchProviders200ResponseResultsCR {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'flatrate': !exists(json, 'flatrate') ? undefined : json['flatrate'],
    };
}

export function MovieWatchProviders200ResponseResultsCRToJSON(value?: MovieWatchProviders200ResponseResultsCR | null): any {
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
