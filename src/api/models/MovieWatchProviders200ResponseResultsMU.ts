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
 * @interface MovieWatchProviders200ResponseResultsMU
 */
export interface MovieWatchProviders200ResponseResultsMU {
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsMU
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsMU
     */
    buy?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsMU
     */
    rent?: any | null;
}

/**
 * Check if a given object implements the MovieWatchProviders200ResponseResultsMU interface.
 */
export function instanceOfMovieWatchProviders200ResponseResultsMU(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MovieWatchProviders200ResponseResultsMUFromJSON(json: any): MovieWatchProviders200ResponseResultsMU {
    return MovieWatchProviders200ResponseResultsMUFromJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsMUFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieWatchProviders200ResponseResultsMU {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'buy': !exists(json, 'buy') ? undefined : json['buy'],
        'rent': !exists(json, 'rent') ? undefined : json['rent'],
    };
}

export function MovieWatchProviders200ResponseResultsMUToJSON(value?: MovieWatchProviders200ResponseResultsMU | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'link': value.link,
        'buy': value.buy,
        'rent': value.rent,
    };
}

