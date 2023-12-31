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
 * @interface FindById200Response
 */
export interface FindById200Response {
    /**
     * 
     * @type {any}
     * @memberof FindById200Response
     */
    movieResults?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FindById200Response
     */
    personResults?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FindById200Response
     */
    tvResults?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FindById200Response
     */
    tvEpisodeResults?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FindById200Response
     */
    tvSeasonResults?: any | null;
}

/**
 * Check if a given object implements the FindById200Response interface.
 */
export function instanceOfFindById200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FindById200ResponseFromJSON(json: any): FindById200Response {
    return FindById200ResponseFromJSONTyped(json, false);
}

export function FindById200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FindById200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'movieResults': !exists(json, 'movie_results') ? undefined : json['movie_results'],
        'personResults': !exists(json, 'person_results') ? undefined : json['person_results'],
        'tvResults': !exists(json, 'tv_results') ? undefined : json['tv_results'],
        'tvEpisodeResults': !exists(json, 'tv_episode_results') ? undefined : json['tv_episode_results'],
        'tvSeasonResults': !exists(json, 'tv_season_results') ? undefined : json['tv_season_results'],
    };
}

export function FindById200ResponseToJSON(value?: FindById200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'movie_results': value.movieResults,
        'person_results': value.personResults,
        'tv_results': value.tvResults,
        'tv_episode_results': value.tvEpisodeResults,
        'tv_season_results': value.tvSeasonResults,
    };
}

