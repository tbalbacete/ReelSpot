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
import type { TvSeriesLatestId200ResponseLastEpisodeToAir } from './TvSeriesLatestId200ResponseLastEpisodeToAir';
import {
    TvSeriesLatestId200ResponseLastEpisodeToAirFromJSON,
    TvSeriesLatestId200ResponseLastEpisodeToAirFromJSONTyped,
    TvSeriesLatestId200ResponseLastEpisodeToAirToJSON,
} from './TvSeriesLatestId200ResponseLastEpisodeToAir';

/**
 * 
 * @export
 * @interface TvSeriesLatestId200Response
 */
export interface TvSeriesLatestId200Response {
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    adult?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    backdropPath?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    createdBy?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    episodeRunTime?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    firstAirDate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    genres?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    homepage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    inProduction?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    languages?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    lastAirDate?: any | null;
    /**
     * 
     * @type {TvSeriesLatestId200ResponseLastEpisodeToAir}
     * @memberof TvSeriesLatestId200Response
     */
    lastEpisodeToAir?: TvSeriesLatestId200ResponseLastEpisodeToAir;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    nextEpisodeToAir?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    networks?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    numberOfEpisodes?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    numberOfSeasons?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    originCountry?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    originalLanguage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    originalName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    overview?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    popularity?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    posterPath?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    productionCompanies?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    productionCountries?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    seasons?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    spokenLanguages?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    status?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    tagline?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    type?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    voteAverage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200Response
     */
    voteCount?: any | null;
}

/**
 * Check if a given object implements the TvSeriesLatestId200Response interface.
 */
export function instanceOfTvSeriesLatestId200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TvSeriesLatestId200ResponseFromJSON(json: any): TvSeriesLatestId200Response {
    return TvSeriesLatestId200ResponseFromJSONTyped(json, false);
}

export function TvSeriesLatestId200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesLatestId200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adult': !exists(json, 'adult') ? undefined : json['adult'],
        'backdropPath': !exists(json, 'backdrop_path') ? undefined : json['backdrop_path'],
        'createdBy': !exists(json, 'created_by') ? undefined : json['created_by'],
        'episodeRunTime': !exists(json, 'episode_run_time') ? undefined : json['episode_run_time'],
        'firstAirDate': !exists(json, 'first_air_date') ? undefined : json['first_air_date'],
        'genres': !exists(json, 'genres') ? undefined : json['genres'],
        'homepage': !exists(json, 'homepage') ? undefined : json['homepage'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'inProduction': !exists(json, 'in_production') ? undefined : json['in_production'],
        'languages': !exists(json, 'languages') ? undefined : json['languages'],
        'lastAirDate': !exists(json, 'last_air_date') ? undefined : json['last_air_date'],
        'lastEpisodeToAir': !exists(json, 'last_episode_to_air') ? undefined : TvSeriesLatestId200ResponseLastEpisodeToAirFromJSON(json['last_episode_to_air']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'nextEpisodeToAir': !exists(json, 'next_episode_to_air') ? undefined : json['next_episode_to_air'],
        'networks': !exists(json, 'networks') ? undefined : json['networks'],
        'numberOfEpisodes': !exists(json, 'number_of_episodes') ? undefined : json['number_of_episodes'],
        'numberOfSeasons': !exists(json, 'number_of_seasons') ? undefined : json['number_of_seasons'],
        'originCountry': !exists(json, 'origin_country') ? undefined : json['origin_country'],
        'originalLanguage': !exists(json, 'original_language') ? undefined : json['original_language'],
        'originalName': !exists(json, 'original_name') ? undefined : json['original_name'],
        'overview': !exists(json, 'overview') ? undefined : json['overview'],
        'popularity': !exists(json, 'popularity') ? undefined : json['popularity'],
        'posterPath': !exists(json, 'poster_path') ? undefined : json['poster_path'],
        'productionCompanies': !exists(json, 'production_companies') ? undefined : json['production_companies'],
        'productionCountries': !exists(json, 'production_countries') ? undefined : json['production_countries'],
        'seasons': !exists(json, 'seasons') ? undefined : json['seasons'],
        'spokenLanguages': !exists(json, 'spoken_languages') ? undefined : json['spoken_languages'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'tagline': !exists(json, 'tagline') ? undefined : json['tagline'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'voteAverage': !exists(json, 'vote_average') ? undefined : json['vote_average'],
        'voteCount': !exists(json, 'vote_count') ? undefined : json['vote_count'],
    };
}

export function TvSeriesLatestId200ResponseToJSON(value?: TvSeriesLatestId200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adult': value.adult,
        'backdrop_path': value.backdropPath,
        'created_by': value.createdBy,
        'episode_run_time': value.episodeRunTime,
        'first_air_date': value.firstAirDate,
        'genres': value.genres,
        'homepage': value.homepage,
        'id': value.id,
        'in_production': value.inProduction,
        'languages': value.languages,
        'last_air_date': value.lastAirDate,
        'last_episode_to_air': TvSeriesLatestId200ResponseLastEpisodeToAirToJSON(value.lastEpisodeToAir),
        'name': value.name,
        'next_episode_to_air': value.nextEpisodeToAir,
        'networks': value.networks,
        'number_of_episodes': value.numberOfEpisodes,
        'number_of_seasons': value.numberOfSeasons,
        'origin_country': value.originCountry,
        'original_language': value.originalLanguage,
        'original_name': value.originalName,
        'overview': value.overview,
        'popularity': value.popularity,
        'poster_path': value.posterPath,
        'production_companies': value.productionCompanies,
        'production_countries': value.productionCountries,
        'seasons': value.seasons,
        'spoken_languages': value.spokenLanguages,
        'status': value.status,
        'tagline': value.tagline,
        'type': value.type,
        'vote_average': value.voteAverage,
        'vote_count': value.voteCount,
    };
}

