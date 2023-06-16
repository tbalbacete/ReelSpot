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
import type { TvEpisodeGroupDetails200ResponseNetwork } from './TvEpisodeGroupDetails200ResponseNetwork';
import {
    TvEpisodeGroupDetails200ResponseNetworkFromJSON,
    TvEpisodeGroupDetails200ResponseNetworkFromJSONTyped,
    TvEpisodeGroupDetails200ResponseNetworkToJSON,
} from './TvEpisodeGroupDetails200ResponseNetwork';

/**
 * 
 * @export
 * @interface TvEpisodeGroupDetails200Response
 */
export interface TvEpisodeGroupDetails200Response {
    /**
     * 
     * @type {any}
     * @memberof TvEpisodeGroupDetails200Response
     */
    description?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvEpisodeGroupDetails200Response
     */
    episodeCount?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvEpisodeGroupDetails200Response
     */
    groupCount?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvEpisodeGroupDetails200Response
     */
    groups?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvEpisodeGroupDetails200Response
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TvEpisodeGroupDetails200Response
     */
    name?: any | null;
    /**
     * 
     * @type {TvEpisodeGroupDetails200ResponseNetwork}
     * @memberof TvEpisodeGroupDetails200Response
     */
    network?: TvEpisodeGroupDetails200ResponseNetwork;
    /**
     * 
     * @type {any}
     * @memberof TvEpisodeGroupDetails200Response
     */
    type?: any | null;
}

/**
 * Check if a given object implements the TvEpisodeGroupDetails200Response interface.
 */
export function instanceOfTvEpisodeGroupDetails200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TvEpisodeGroupDetails200ResponseFromJSON(json: any): TvEpisodeGroupDetails200Response {
    return TvEpisodeGroupDetails200ResponseFromJSONTyped(json, false);
}

export function TvEpisodeGroupDetails200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvEpisodeGroupDetails200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'episodeCount': !exists(json, 'episode_count') ? undefined : json['episode_count'],
        'groupCount': !exists(json, 'group_count') ? undefined : json['group_count'],
        'groups': !exists(json, 'groups') ? undefined : json['groups'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'network': !exists(json, 'network') ? undefined : TvEpisodeGroupDetails200ResponseNetworkFromJSON(json['network']),
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function TvEpisodeGroupDetails200ResponseToJSON(value?: TvEpisodeGroupDetails200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'episode_count': value.episodeCount,
        'group_count': value.groupCount,
        'groups': value.groups,
        'id': value.id,
        'name': value.name,
        'network': TvEpisodeGroupDetails200ResponseNetworkToJSON(value.network),
        'type': value.type,
    };
}

