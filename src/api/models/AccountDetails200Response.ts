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
import type { AccountDetails200ResponseAvatar } from './AccountDetails200ResponseAvatar';
import {
    AccountDetails200ResponseAvatarFromJSON,
    AccountDetails200ResponseAvatarFromJSONTyped,
    AccountDetails200ResponseAvatarToJSON,
} from './AccountDetails200ResponseAvatar';

/**
 * 
 * @export
 * @interface AccountDetails200Response
 */
export interface AccountDetails200Response {
    /**
     * 
     * @type {AccountDetails200ResponseAvatar}
     * @memberof AccountDetails200Response
     */
    avatar?: AccountDetails200ResponseAvatar;
    /**
     * 
     * @type {any}
     * @memberof AccountDetails200Response
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AccountDetails200Response
     */
    iso6391?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AccountDetails200Response
     */
    iso31661?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AccountDetails200Response
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AccountDetails200Response
     */
    includeAdult?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AccountDetails200Response
     */
    username?: any | null;
}

/**
 * Check if a given object implements the AccountDetails200Response interface.
 */
export function instanceOfAccountDetails200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountDetails200ResponseFromJSON(json: any): AccountDetails200Response {
    return AccountDetails200ResponseFromJSONTyped(json, false);
}

export function AccountDetails200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountDetails200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'avatar': !exists(json, 'avatar') ? undefined : AccountDetails200ResponseAvatarFromJSON(json['avatar']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'iso6391': !exists(json, 'iso_639_1') ? undefined : json['iso_639_1'],
        'iso31661': !exists(json, 'iso_3166_1') ? undefined : json['iso_3166_1'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'includeAdult': !exists(json, 'include_adult') ? undefined : json['include_adult'],
        'username': !exists(json, 'username') ? undefined : json['username'],
    };
}

export function AccountDetails200ResponseToJSON(value?: AccountDetails200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'avatar': AccountDetails200ResponseAvatarToJSON(value.avatar),
        'id': value.id,
        'iso_639_1': value.iso6391,
        'iso_3166_1': value.iso31661,
        'name': value.name,
        'include_adult': value.includeAdult,
        'username': value.username,
    };
}

