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
 * @interface AuthenticationDeleteSession200Response
 */
export interface AuthenticationDeleteSession200Response {
    /**
     * 
     * @type {any}
     * @memberof AuthenticationDeleteSession200Response
     */
    success?: any | null;
}

/**
 * Check if a given object implements the AuthenticationDeleteSession200Response interface.
 */
export function instanceOfAuthenticationDeleteSession200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuthenticationDeleteSession200ResponseFromJSON(json: any): AuthenticationDeleteSession200Response {
    return AuthenticationDeleteSession200ResponseFromJSONTyped(json, false);
}

export function AuthenticationDeleteSession200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthenticationDeleteSession200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
    };
}

export function AuthenticationDeleteSession200ResponseToJSON(value?: AuthenticationDeleteSession200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
    };
}

