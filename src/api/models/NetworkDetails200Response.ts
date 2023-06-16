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
 * @interface NetworkDetails200Response
 */
export interface NetworkDetails200Response {
    /**
     * 
     * @type {any}
     * @memberof NetworkDetails200Response
     */
    headquarters?: any | null;
    /**
     * 
     * @type {any}
     * @memberof NetworkDetails200Response
     */
    homepage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof NetworkDetails200Response
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof NetworkDetails200Response
     */
    logoPath?: any | null;
    /**
     * 
     * @type {any}
     * @memberof NetworkDetails200Response
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof NetworkDetails200Response
     */
    originCountry?: any | null;
}

/**
 * Check if a given object implements the NetworkDetails200Response interface.
 */
export function instanceOfNetworkDetails200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NetworkDetails200ResponseFromJSON(json: any): NetworkDetails200Response {
    return NetworkDetails200ResponseFromJSONTyped(json, false);
}

export function NetworkDetails200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkDetails200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'headquarters': !exists(json, 'headquarters') ? undefined : json['headquarters'],
        'homepage': !exists(json, 'homepage') ? undefined : json['homepage'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'logoPath': !exists(json, 'logo_path') ? undefined : json['logo_path'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'originCountry': !exists(json, 'origin_country') ? undefined : json['origin_country'],
    };
}

export function NetworkDetails200ResponseToJSON(value?: NetworkDetails200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'headquarters': value.headquarters,
        'homepage': value.homepage,
        'id': value.id,
        'logo_path': value.logoPath,
        'name': value.name,
        'origin_country': value.originCountry,
    };
}

