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
 * @interface AuthenticationCreateSession200Response
 */
export interface AuthenticationCreateSession200Response {
    /**
     * 
     * @type {any}
     * @memberof AuthenticationCreateSession200Response
     */
    success?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AuthenticationCreateSession200Response
     */
    sessionId?: any | null;
}

/**
 * Check if a given object implements the AuthenticationCreateSession200Response interface.
 */
export function instanceOfAuthenticationCreateSession200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuthenticationCreateSession200ResponseFromJSON(json: any): AuthenticationCreateSession200Response {
    return AuthenticationCreateSession200ResponseFromJSONTyped(json, false);
}

export function AuthenticationCreateSession200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthenticationCreateSession200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'sessionId': !exists(json, 'session_id') ? undefined : json['session_id'],
    };
}

export function AuthenticationCreateSession200ResponseToJSON(value?: AuthenticationCreateSession200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'session_id': value.sessionId,
    };
}

