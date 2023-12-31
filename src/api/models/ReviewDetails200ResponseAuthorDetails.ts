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
 * @interface ReviewDetails200ResponseAuthorDetails
 */
export interface ReviewDetails200ResponseAuthorDetails {
    /**
     * 
     * @type {any}
     * @memberof ReviewDetails200ResponseAuthorDetails
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReviewDetails200ResponseAuthorDetails
     */
    username?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReviewDetails200ResponseAuthorDetails
     */
    avatarPath?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReviewDetails200ResponseAuthorDetails
     */
    rating?: any | null;
}

/**
 * Check if a given object implements the ReviewDetails200ResponseAuthorDetails interface.
 */
export function instanceOfReviewDetails200ResponseAuthorDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReviewDetails200ResponseAuthorDetailsFromJSON(json: any): ReviewDetails200ResponseAuthorDetails {
    return ReviewDetails200ResponseAuthorDetailsFromJSONTyped(json, false);
}

export function ReviewDetails200ResponseAuthorDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewDetails200ResponseAuthorDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'avatarPath': !exists(json, 'avatar_path') ? undefined : json['avatar_path'],
        'rating': !exists(json, 'rating') ? undefined : json['rating'],
    };
}

export function ReviewDetails200ResponseAuthorDetailsToJSON(value?: ReviewDetails200ResponseAuthorDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'username': value.username,
        'avatar_path': value.avatarPath,
        'rating': value.rating,
    };
}

