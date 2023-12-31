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
 * @interface TvSeriesExternalIds200Response
 */
export interface TvSeriesExternalIds200Response {
    /**
     * 
     * @type {any}
     * @memberof TvSeriesExternalIds200Response
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesExternalIds200Response
     */
    imdbId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesExternalIds200Response
     */
    freebaseMid?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesExternalIds200Response
     */
    freebaseId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesExternalIds200Response
     */
    tvdbId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesExternalIds200Response
     */
    tvrageId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesExternalIds200Response
     */
    wikidataId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesExternalIds200Response
     */
    facebookId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesExternalIds200Response
     */
    instagramId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesExternalIds200Response
     */
    twitterId?: any | null;
}

/**
 * Check if a given object implements the TvSeriesExternalIds200Response interface.
 */
export function instanceOfTvSeriesExternalIds200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TvSeriesExternalIds200ResponseFromJSON(json: any): TvSeriesExternalIds200Response {
    return TvSeriesExternalIds200ResponseFromJSONTyped(json, false);
}

export function TvSeriesExternalIds200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesExternalIds200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'imdbId': !exists(json, 'imdb_id') ? undefined : json['imdb_id'],
        'freebaseMid': !exists(json, 'freebase_mid') ? undefined : json['freebase_mid'],
        'freebaseId': !exists(json, 'freebase_id') ? undefined : json['freebase_id'],
        'tvdbId': !exists(json, 'tvdb_id') ? undefined : json['tvdb_id'],
        'tvrageId': !exists(json, 'tvrage_id') ? undefined : json['tvrage_id'],
        'wikidataId': !exists(json, 'wikidata_id') ? undefined : json['wikidata_id'],
        'facebookId': !exists(json, 'facebook_id') ? undefined : json['facebook_id'],
        'instagramId': !exists(json, 'instagram_id') ? undefined : json['instagram_id'],
        'twitterId': !exists(json, 'twitter_id') ? undefined : json['twitter_id'],
    };
}

export function TvSeriesExternalIds200ResponseToJSON(value?: TvSeriesExternalIds200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'imdb_id': value.imdbId,
        'freebase_mid': value.freebaseMid,
        'freebase_id': value.freebaseId,
        'tvdb_id': value.tvdbId,
        'tvrage_id': value.tvrageId,
        'wikidata_id': value.wikidataId,
        'facebook_id': value.facebookId,
        'instagram_id': value.instagramId,
        'twitter_id': value.twitterId,
    };
}

