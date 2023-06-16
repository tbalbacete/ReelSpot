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
 * @interface CreditDetails200ResponseMedia
 */
export interface CreditDetails200ResponseMedia {
    /**
     * 
     * @type {any}
     * @memberof CreditDetails200ResponseMedia
     */
    adult?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CreditDetails200ResponseMedia
     */
    backdropPath?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CreditDetails200ResponseMedia
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CreditDetails200ResponseMedia
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CreditDetails200ResponseMedia
     */
    originalLanguage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CreditDetails200ResponseMedia
     */
    originalName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CreditDetails200ResponseMedia
     */
    overview?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CreditDetails200ResponseMedia
     */
    posterPath?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CreditDetails200ResponseMedia
     */
    mediaType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CreditDetails200ResponseMedia
     */
    genreIds?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CreditDetails200ResponseMedia
     */
    popularity?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CreditDetails200ResponseMedia
     */
    firstAirDate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CreditDetails200ResponseMedia
     */
    voteAverage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CreditDetails200ResponseMedia
     */
    voteCount?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CreditDetails200ResponseMedia
     */
    originCountry?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CreditDetails200ResponseMedia
     */
    character?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CreditDetails200ResponseMedia
     */
    episodes?: any | null;
    /**
     * 
     * @type {any}
     * @memberof CreditDetails200ResponseMedia
     */
    seasons?: any | null;
}

/**
 * Check if a given object implements the CreditDetails200ResponseMedia interface.
 */
export function instanceOfCreditDetails200ResponseMedia(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreditDetails200ResponseMediaFromJSON(json: any): CreditDetails200ResponseMedia {
    return CreditDetails200ResponseMediaFromJSONTyped(json, false);
}

export function CreditDetails200ResponseMediaFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditDetails200ResponseMedia {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adult': !exists(json, 'adult') ? undefined : json['adult'],
        'backdropPath': !exists(json, 'backdrop_path') ? undefined : json['backdrop_path'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'originalLanguage': !exists(json, 'original_language') ? undefined : json['original_language'],
        'originalName': !exists(json, 'original_name') ? undefined : json['original_name'],
        'overview': !exists(json, 'overview') ? undefined : json['overview'],
        'posterPath': !exists(json, 'poster_path') ? undefined : json['poster_path'],
        'mediaType': !exists(json, 'media_type') ? undefined : json['media_type'],
        'genreIds': !exists(json, 'genre_ids') ? undefined : json['genre_ids'],
        'popularity': !exists(json, 'popularity') ? undefined : json['popularity'],
        'firstAirDate': !exists(json, 'first_air_date') ? undefined : json['first_air_date'],
        'voteAverage': !exists(json, 'vote_average') ? undefined : json['vote_average'],
        'voteCount': !exists(json, 'vote_count') ? undefined : json['vote_count'],
        'originCountry': !exists(json, 'origin_country') ? undefined : json['origin_country'],
        'character': !exists(json, 'character') ? undefined : json['character'],
        'episodes': !exists(json, 'episodes') ? undefined : json['episodes'],
        'seasons': !exists(json, 'seasons') ? undefined : json['seasons'],
    };
}

export function CreditDetails200ResponseMediaToJSON(value?: CreditDetails200ResponseMedia | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adult': value.adult,
        'backdrop_path': value.backdropPath,
        'id': value.id,
        'name': value.name,
        'original_language': value.originalLanguage,
        'original_name': value.originalName,
        'overview': value.overview,
        'poster_path': value.posterPath,
        'media_type': value.mediaType,
        'genre_ids': value.genreIds,
        'popularity': value.popularity,
        'first_air_date': value.firstAirDate,
        'vote_average': value.voteAverage,
        'vote_count': value.voteCount,
        'origin_country': value.originCountry,
        'character': value.character,
        'episodes': value.episodes,
        'seasons': value.seasons,
    };
}
