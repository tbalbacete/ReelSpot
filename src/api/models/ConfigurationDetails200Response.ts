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
import type { ConfigurationDetails200ResponseImages } from './ConfigurationDetails200ResponseImages';
import {
    ConfigurationDetails200ResponseImagesFromJSON,
    ConfigurationDetails200ResponseImagesFromJSONTyped,
    ConfigurationDetails200ResponseImagesToJSON,
} from './ConfigurationDetails200ResponseImages';

/**
 * 
 * @export
 * @interface ConfigurationDetails200Response
 */
export interface ConfigurationDetails200Response {
    /**
     * 
     * @type {ConfigurationDetails200ResponseImages}
     * @memberof ConfigurationDetails200Response
     */
    images?: ConfigurationDetails200ResponseImages;
    /**
     * 
     * @type {any}
     * @memberof ConfigurationDetails200Response
     */
    changeKeys?: any | null;
}

/**
 * Check if a given object implements the ConfigurationDetails200Response interface.
 */
export function instanceOfConfigurationDetails200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConfigurationDetails200ResponseFromJSON(json: any): ConfigurationDetails200Response {
    return ConfigurationDetails200ResponseFromJSONTyped(json, false);
}

export function ConfigurationDetails200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationDetails200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'images': !exists(json, 'images') ? undefined : ConfigurationDetails200ResponseImagesFromJSON(json['images']),
        'changeKeys': !exists(json, 'change_keys') ? undefined : json['change_keys'],
    };
}

export function ConfigurationDetails200ResponseToJSON(value?: ConfigurationDetails200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'images': ConfigurationDetails200ResponseImagesToJSON(value.images),
        'change_keys': value.changeKeys,
    };
}

