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
 * @interface TvEpisodeTranslations200Response
 */
export interface TvEpisodeTranslations200Response {
    /**
     * 
     * @type {any}
     * @memberof TvEpisodeTranslations200Response
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvEpisodeTranslations200Response
     */
    translations?: any | null;
}

/**
 * Check if a given object implements the TvEpisodeTranslations200Response interface.
 */
export function instanceOfTvEpisodeTranslations200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TvEpisodeTranslations200ResponseFromJSON(json: any): TvEpisodeTranslations200Response {
    return TvEpisodeTranslations200ResponseFromJSONTyped(json, false);
}

export function TvEpisodeTranslations200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvEpisodeTranslations200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'translations': !exists(json, 'translations') ? undefined : json['translations'],
    };
}

export function TvEpisodeTranslations200ResponseToJSON(value?: TvEpisodeTranslations200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'translations': value.translations,
    };
}
