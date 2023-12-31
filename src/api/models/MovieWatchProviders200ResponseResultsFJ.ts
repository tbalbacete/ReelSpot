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
 * @interface MovieWatchProviders200ResponseResultsFJ
 */
export interface MovieWatchProviders200ResponseResultsFJ {
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsFJ
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsFJ
     */
    buy?: any | null;
}

/**
 * Check if a given object implements the MovieWatchProviders200ResponseResultsFJ interface.
 */
export function instanceOfMovieWatchProviders200ResponseResultsFJ(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MovieWatchProviders200ResponseResultsFJFromJSON(json: any): MovieWatchProviders200ResponseResultsFJ {
    return MovieWatchProviders200ResponseResultsFJFromJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsFJFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieWatchProviders200ResponseResultsFJ {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'buy': !exists(json, 'buy') ? undefined : json['buy'],
    };
}

export function MovieWatchProviders200ResponseResultsFJToJSON(value?: MovieWatchProviders200ResponseResultsFJ | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'link': value.link,
        'buy': value.buy,
    };
}

