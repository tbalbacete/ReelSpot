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
 * @interface TvEpisodeDetails200Response
 */
export interface TvEpisodeDetails200Response {
    /**
     * 
     * @type {any}
     * @memberof TvEpisodeDetails200Response
     */
    airDate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvEpisodeDetails200Response
     */
    crew?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvEpisodeDetails200Response
     */
    episodeNumber?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvEpisodeDetails200Response
     */
    guestStars?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvEpisodeDetails200Response
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvEpisodeDetails200Response
     */
    overview?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvEpisodeDetails200Response
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvEpisodeDetails200Response
     */
    productionCode?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvEpisodeDetails200Response
     */
    runtime?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvEpisodeDetails200Response
     */
    seasonNumber?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvEpisodeDetails200Response
     */
    stillPath?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvEpisodeDetails200Response
     */
    voteAverage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvEpisodeDetails200Response
     */
    voteCount?: any | null;
}

/**
 * Check if a given object implements the TvEpisodeDetails200Response interface.
 */
export function instanceOfTvEpisodeDetails200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TvEpisodeDetails200ResponseFromJSON(json: any): TvEpisodeDetails200Response {
    return TvEpisodeDetails200ResponseFromJSONTyped(json, false);
}

export function TvEpisodeDetails200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvEpisodeDetails200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'airDate': !exists(json, 'air_date') ? undefined : json['air_date'],
        'crew': !exists(json, 'crew') ? undefined : json['crew'],
        'episodeNumber': !exists(json, 'episode_number') ? undefined : json['episode_number'],
        'guestStars': !exists(json, 'guest_stars') ? undefined : json['guest_stars'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'overview': !exists(json, 'overview') ? undefined : json['overview'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'productionCode': !exists(json, 'production_code') ? undefined : json['production_code'],
        'runtime': !exists(json, 'runtime') ? undefined : json['runtime'],
        'seasonNumber': !exists(json, 'season_number') ? undefined : json['season_number'],
        'stillPath': !exists(json, 'still_path') ? undefined : json['still_path'],
        'voteAverage': !exists(json, 'vote_average') ? undefined : json['vote_average'],
        'voteCount': !exists(json, 'vote_count') ? undefined : json['vote_count'],
    };
}

export function TvEpisodeDetails200ResponseToJSON(value?: TvEpisodeDetails200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'air_date': value.airDate,
        'crew': value.crew,
        'episode_number': value.episodeNumber,
        'guest_stars': value.guestStars,
        'name': value.name,
        'overview': value.overview,
        'id': value.id,
        'production_code': value.productionCode,
        'runtime': value.runtime,
        'season_number': value.seasonNumber,
        'still_path': value.stillPath,
        'vote_average': value.voteAverage,
        'vote_count': value.voteCount,
    };
}

