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
 * @interface TvSeriesReviews200Response
 */
export interface TvSeriesReviews200Response {
    /**
     * 
     * @type {any}
     * @memberof TvSeriesReviews200Response
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesReviews200Response
     */
    page?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesReviews200Response
     */
    results?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesReviews200Response
     */
    totalPages?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesReviews200Response
     */
    totalResults?: any | null;
}

/**
 * Check if a given object implements the TvSeriesReviews200Response interface.
 */
export function instanceOfTvSeriesReviews200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TvSeriesReviews200ResponseFromJSON(json: any): TvSeriesReviews200Response {
    return TvSeriesReviews200ResponseFromJSONTyped(json, false);
}

export function TvSeriesReviews200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesReviews200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'page': !exists(json, 'page') ? undefined : json['page'],
        'results': !exists(json, 'results') ? undefined : json['results'],
        'totalPages': !exists(json, 'total_pages') ? undefined : json['total_pages'],
        'totalResults': !exists(json, 'total_results') ? undefined : json['total_results'],
    };
}

export function TvSeriesReviews200ResponseToJSON(value?: TvSeriesReviews200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'page': value.page,
        'results': value.results,
        'total_pages': value.totalPages,
        'total_results': value.totalResults,
    };
}

