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
 * @interface AccountDetails200ResponseAvatarGravatar
 */
export interface AccountDetails200ResponseAvatarGravatar {
    /**
     * 
     * @type {any}
     * @memberof AccountDetails200ResponseAvatarGravatar
     */
    hash?: any | null;
}

/**
 * Check if a given object implements the AccountDetails200ResponseAvatarGravatar interface.
 */
export function instanceOfAccountDetails200ResponseAvatarGravatar(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountDetails200ResponseAvatarGravatarFromJSON(json: any): AccountDetails200ResponseAvatarGravatar {
    return AccountDetails200ResponseAvatarGravatarFromJSONTyped(json, false);
}

export function AccountDetails200ResponseAvatarGravatarFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountDetails200ResponseAvatarGravatar {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hash': !exists(json, 'hash') ? undefined : json['hash'],
    };
}

export function AccountDetails200ResponseAvatarGravatarToJSON(value?: AccountDetails200ResponseAvatarGravatar | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hash': value.hash,
    };
}
