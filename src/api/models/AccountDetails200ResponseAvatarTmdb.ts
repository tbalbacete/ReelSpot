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
 * @interface AccountDetails200ResponseAvatarTmdb
 */
export interface AccountDetails200ResponseAvatarTmdb {
    /**
     * 
     * @type {any}
     * @memberof AccountDetails200ResponseAvatarTmdb
     */
    avatarPath?: any | null;
}

/**
 * Check if a given object implements the AccountDetails200ResponseAvatarTmdb interface.
 */
export function instanceOfAccountDetails200ResponseAvatarTmdb(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountDetails200ResponseAvatarTmdbFromJSON(json: any): AccountDetails200ResponseAvatarTmdb {
    return AccountDetails200ResponseAvatarTmdbFromJSONTyped(json, false);
}

export function AccountDetails200ResponseAvatarTmdbFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountDetails200ResponseAvatarTmdb {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'avatarPath': !exists(json, 'avatar_path') ? undefined : json['avatar_path'],
    };
}

export function AccountDetails200ResponseAvatarTmdbToJSON(value?: AccountDetails200ResponseAvatarTmdb | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'avatar_path': value.avatarPath,
    };
}
