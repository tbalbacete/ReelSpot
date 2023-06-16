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
 * @interface TvSeriesCredits200Response
 */
export interface TvSeriesCredits200Response {
    /**
     * 
     * @type {any}
     * @memberof TvSeriesCredits200Response
     */
    cast?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesCredits200Response
     */
    crew?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesCredits200Response
     */
    id?: any | null;
}

/**
 * Check if a given object implements the TvSeriesCredits200Response interface.
 */
export function instanceOfTvSeriesCredits200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TvSeriesCredits200ResponseFromJSON(json: any): TvSeriesCredits200Response {
    return TvSeriesCredits200ResponseFromJSONTyped(json, false);
}

export function TvSeriesCredits200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesCredits200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cast': !exists(json, 'cast') ? undefined : json['cast'],
        'crew': !exists(json, 'crew') ? undefined : json['crew'],
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function TvSeriesCredits200ResponseToJSON(value?: TvSeriesCredits200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cast': value.cast,
        'crew': value.crew,
        'id': value.id,
    };
}

