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
 * @interface MovieTranslations200Response
 */
export interface MovieTranslations200Response {
    /**
     * 
     * @type {any}
     * @memberof MovieTranslations200Response
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MovieTranslations200Response
     */
    translations?: any | null;
}

/**
 * Check if a given object implements the MovieTranslations200Response interface.
 */
export function instanceOfMovieTranslations200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MovieTranslations200ResponseFromJSON(json: any): MovieTranslations200Response {
    return MovieTranslations200ResponseFromJSONTyped(json, false);
}

export function MovieTranslations200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieTranslations200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'translations': !exists(json, 'translations') ? undefined : json['translations'],
    };
}

export function MovieTranslations200ResponseToJSON(value?: MovieTranslations200Response | null): any {
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
