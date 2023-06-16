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
 * @interface TvSeriesContentRatings200Response
 */
export interface TvSeriesContentRatings200Response {
    /**
     * 
     * @type {any}
     * @memberof TvSeriesContentRatings200Response
     */
    results?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesContentRatings200Response
     */
    id?: any | null;
}

/**
 * Check if a given object implements the TvSeriesContentRatings200Response interface.
 */
export function instanceOfTvSeriesContentRatings200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TvSeriesContentRatings200ResponseFromJSON(json: any): TvSeriesContentRatings200Response {
    return TvSeriesContentRatings200ResponseFromJSONTyped(json, false);
}

export function TvSeriesContentRatings200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesContentRatings200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'results': !exists(json, 'results') ? undefined : json['results'],
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function TvSeriesContentRatings200ResponseToJSON(value?: TvSeriesContentRatings200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'results': value.results,
        'id': value.id,
    };
}
