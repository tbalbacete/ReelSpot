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
import type { MovieUpcomingList200ResponseDates } from './MovieUpcomingList200ResponseDates';
import {
    MovieUpcomingList200ResponseDatesFromJSON,
    MovieUpcomingList200ResponseDatesFromJSONTyped,
    MovieUpcomingList200ResponseDatesToJSON,
} from './MovieUpcomingList200ResponseDates';

/**
 * 
 * @export
 * @interface MovieUpcomingList200Response
 */
export interface MovieUpcomingList200Response {
    /**
     * 
     * @type {MovieUpcomingList200ResponseDates}
     * @memberof MovieUpcomingList200Response
     */
    dates?: MovieUpcomingList200ResponseDates;
    /**
     * 
     * @type {any}
     * @memberof MovieUpcomingList200Response
     */
    page?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieUpcomingList200Response
     */
    results?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieUpcomingList200Response
     */
    totalPages?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieUpcomingList200Response
     */
    totalResults?: any | null;
}

/**
 * Check if a given object implements the MovieUpcomingList200Response interface.
 */
export function instanceOfMovieUpcomingList200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MovieUpcomingList200ResponseFromJSON(json: any): MovieUpcomingList200Response {
    return MovieUpcomingList200ResponseFromJSONTyped(json, false);
}

export function MovieUpcomingList200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieUpcomingList200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dates': !exists(json, 'dates') ? undefined : MovieUpcomingList200ResponseDatesFromJSON(json['dates']),
        'page': !exists(json, 'page') ? undefined : json['page'],
        'results': !exists(json, 'results') ? undefined : json['results'],
        'totalPages': !exists(json, 'total_pages') ? undefined : json['total_pages'],
        'totalResults': !exists(json, 'total_results') ? undefined : json['total_results'],
    };
}

export function MovieUpcomingList200ResponseToJSON(value?: MovieUpcomingList200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dates': MovieUpcomingList200ResponseDatesToJSON(value.dates),
        'page': value.page,
        'results': value.results,
        'total_pages': value.totalPages,
        'total_results': value.totalResults,
    };
}
