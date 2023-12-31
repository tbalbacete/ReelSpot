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
 * @interface MovieDetails200Response
 */
export interface MovieDetails200Response {
    /**
     * 
     * @type {any}
     * @memberof MovieDetails200Response
     */
    adult?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieDetails200Response
     */
    backdropPath?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieDetails200Response
     */
    belongsToCollection?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieDetails200Response
     */
    budget?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieDetails200Response
     */
    genres?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieDetails200Response
     */
    homepage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieDetails200Response
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieDetails200Response
     */
    imdbId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieDetails200Response
     */
    originalLanguage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieDetails200Response
     */
    originalTitle?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieDetails200Response
     */
    overview?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieDetails200Response
     */
    popularity?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieDetails200Response
     */
    posterPath?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieDetails200Response
     */
    productionCompanies?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieDetails200Response
     */
    productionCountries?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieDetails200Response
     */
    releaseDate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieDetails200Response
     */
    revenue?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieDetails200Response
     */
    runtime?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieDetails200Response
     */
    spokenLanguages?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieDetails200Response
     */
    status?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieDetails200Response
     */
    tagline?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieDetails200Response
     */
    title?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieDetails200Response
     */
    video?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieDetails200Response
     */
    voteAverage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieDetails200Response
     */
    voteCount?: any | null;
}

/**
 * Check if a given object implements the MovieDetails200Response interface.
 */
export function instanceOfMovieDetails200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MovieDetails200ResponseFromJSON(json: any): MovieDetails200Response {
    return MovieDetails200ResponseFromJSONTyped(json, false);
}

export function MovieDetails200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieDetails200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adult': !exists(json, 'adult') ? undefined : json['adult'],
        'backdropPath': !exists(json, 'backdrop_path') ? undefined : json['backdrop_path'],
        'belongsToCollection': !exists(json, 'belongs_to_collection') ? undefined : json['belongs_to_collection'],
        'budget': !exists(json, 'budget') ? undefined : json['budget'],
        'genres': !exists(json, 'genres') ? undefined : json['genres'],
        'homepage': !exists(json, 'homepage') ? undefined : json['homepage'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'imdbId': !exists(json, 'imdb_id') ? undefined : json['imdb_id'],
        'originalLanguage': !exists(json, 'original_language') ? undefined : json['original_language'],
        'originalTitle': !exists(json, 'original_title') ? undefined : json['original_title'],
        'overview': !exists(json, 'overview') ? undefined : json['overview'],
        'popularity': !exists(json, 'popularity') ? undefined : json['popularity'],
        'posterPath': !exists(json, 'poster_path') ? undefined : json['poster_path'],
        'productionCompanies': !exists(json, 'production_companies') ? undefined : json['production_companies'],
        'productionCountries': !exists(json, 'production_countries') ? undefined : json['production_countries'],
        'releaseDate': !exists(json, 'release_date') ? undefined : json['release_date'],
        'revenue': !exists(json, 'revenue') ? undefined : json['revenue'],
        'runtime': !exists(json, 'runtime') ? undefined : json['runtime'],
        'spokenLanguages': !exists(json, 'spoken_languages') ? undefined : json['spoken_languages'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'tagline': !exists(json, 'tagline') ? undefined : json['tagline'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'video': !exists(json, 'video') ? undefined : json['video'],
        'voteAverage': !exists(json, 'vote_average') ? undefined : json['vote_average'],
        'voteCount': !exists(json, 'vote_count') ? undefined : json['vote_count'],
    };
}

export function MovieDetails200ResponseToJSON(value?: MovieDetails200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adult': value.adult,
        'backdrop_path': value.backdropPath,
        'belongs_to_collection': value.belongsToCollection,
        'budget': value.budget,
        'genres': value.genres,
        'homepage': value.homepage,
        'id': value.id,
        'imdb_id': value.imdbId,
        'original_language': value.originalLanguage,
        'original_title': value.originalTitle,
        'overview': value.overview,
        'popularity': value.popularity,
        'poster_path': value.posterPath,
        'production_companies': value.productionCompanies,
        'production_countries': value.productionCountries,
        'release_date': value.releaseDate,
        'revenue': value.revenue,
        'runtime': value.runtime,
        'spoken_languages': value.spokenLanguages,
        'status': value.status,
        'tagline': value.tagline,
        'title': value.title,
        'video': value.video,
        'vote_average': value.voteAverage,
        'vote_count': value.voteCount,
    };
}

