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
 * @interface TvSeriesVideos200Response
 */
export interface TvSeriesVideos200Response {
    /**
     * 
     * @type {any}
     * @memberof TvSeriesVideos200Response
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesVideos200Response
     */
    results?: any | null;
}

/**
 * Check if a given object implements the TvSeriesVideos200Response interface.
 */
export function instanceOfTvSeriesVideos200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TvSeriesVideos200ResponseFromJSON(json: any): TvSeriesVideos200Response {
    return TvSeriesVideos200ResponseFromJSONTyped(json, false);
}

export function TvSeriesVideos200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesVideos200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'results': !exists(json, 'results') ? undefined : json['results'],
    };
}

export function TvSeriesVideos200ResponseToJSON(value?: TvSeriesVideos200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'results': value.results,
    };
}
