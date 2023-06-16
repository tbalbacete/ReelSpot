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
 * @interface MovieWatchProviders200ResponseResultsPL
 */
export interface MovieWatchProviders200ResponseResultsPL {
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsPL
     */
    link?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsPL
     */
    buy?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsPL
     */
    flatrate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieWatchProviders200ResponseResultsPL
     */
    rent?: any | null;
}

/**
 * Check if a given object implements the MovieWatchProviders200ResponseResultsPL interface.
 */
export function instanceOfMovieWatchProviders200ResponseResultsPL(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MovieWatchProviders200ResponseResultsPLFromJSON(json: any): MovieWatchProviders200ResponseResultsPL {
    return MovieWatchProviders200ResponseResultsPLFromJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsPLFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieWatchProviders200ResponseResultsPL {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, 'link') ? undefined : json['link'],
        'buy': !exists(json, 'buy') ? undefined : json['buy'],
        'flatrate': !exists(json, 'flatrate') ? undefined : json['flatrate'],
        'rent': !exists(json, 'rent') ? undefined : json['rent'],
    };
}

export function MovieWatchProviders200ResponseResultsPLToJSON(value?: MovieWatchProviders200ResponseResultsPL | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'link': value.link,
        'buy': value.buy,
        'flatrate': value.flatrate,
        'rent': value.rent,
    };
}
