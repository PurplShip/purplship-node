/**
 * Purplship API
 *  ## API Reference  Purplship is an open source multi-carrier shipping API that simplifies the integration of logistic carrier services.  The Purplship API is organized around REST. Our API has predictable resource-oriented URLs, accepts JSON-encoded  request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.  The Purplship API differs for every account as we release new versions. These docs are customized to your version of the API.   ## Versioning  When backwards-incompatible changes are made to the API, a new, dated version is released.  The current version is `2021.6`.   Read our API changelog and to learn more about backwards compatibility.  As a precaution, use API versioning to check a new API version before committing to an upgrade.   ## Pagination  All top-level API resources have support for bulk fetches via \"list\" API methods. For instance, you can list addresses,  list shipments, and list trackers. These list API methods share a common structure, taking at least these  two parameters: limit, and offset.  Purplship utilizes offset-based pagination via the offset and limit parameters. Both parameters take a number as value (see below) and return objects in reverse chronological order.  The offset parameter returns objects listed after an index.  The limit parameter take a limit on the number of objects to be returned from 1 to 100.   ```json {     \"next\": \"/v1/shipments?limit=25&offset=25\",     \"previous\": \"/v1/shipments?limit=25&offset=25\",     \"results\": [     ] } ```  ## Environments  The Purplship API offer the possibility to create and retrieve certain objects in `test_mode`. In development, it is therefore possible to add carrier connections, get live rates,  buy labels, create trackers and schedule pickups in `test_mode`.  
 *
 * The version of the OpenAPI document: 2021.6
 * Contact: hello@purplship.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import TrackingEvent from './TrackingEvent';

/**
 * The TrackingStatus model module.
 * @module model/TrackingStatus
 * @version 2021.6
 */
class TrackingStatus {
    /**
     * Constructs a new <code>TrackingStatus</code>.
     * The tracking details retrieved
     * @alias module:model/TrackingStatus
     * @param carrier_name {String} The tracking carrier
     * @param carrier_id {String} The tracking carrier configured identifier
     * @param tracking_number {String} The shipment tracking number
     * @param test_mode {Boolean} Specified whether the object was created with a carrier in test mode
     */
    constructor(carrier_name, carrier_id, tracking_number, test_mode) { 
        
        TrackingStatus.initialize(this, carrier_name, carrier_id, tracking_number, test_mode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, carrier_name, carrier_id, tracking_number, test_mode) { 
        obj['carrier_name'] = carrier_name;
        obj['carrier_id'] = carrier_id;
        obj['tracking_number'] = tracking_number;
        obj['test_mode'] = test_mode;
    }

    /**
     * Constructs a <code>TrackingStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TrackingStatus} obj Optional instance to populate.
     * @return {module:model/TrackingStatus} The populated <code>TrackingStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TrackingStatus();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('carrier_name')) {
                obj['carrier_name'] = ApiClient.convertToType(data['carrier_name'], 'String');
            }
            if (data.hasOwnProperty('carrier_id')) {
                obj['carrier_id'] = ApiClient.convertToType(data['carrier_id'], 'String');
            }
            if (data.hasOwnProperty('tracking_number')) {
                obj['tracking_number'] = ApiClient.convertToType(data['tracking_number'], 'String');
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], [TrackingEvent]);
            }
            if (data.hasOwnProperty('delivered')) {
                obj['delivered'] = ApiClient.convertToType(data['delivered'], 'Boolean');
            }
            if (data.hasOwnProperty('test_mode')) {
                obj['test_mode'] = ApiClient.convertToType(data['test_mode'], 'Boolean');
            }
            if (data.hasOwnProperty('pending')) {
                obj['pending'] = ApiClient.convertToType(data['pending'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * A unique identifier
 * @member {String} id
 */
TrackingStatus.prototype['id'] = undefined;

/**
 * The tracking carrier
 * @member {String} carrier_name
 */
TrackingStatus.prototype['carrier_name'] = undefined;

/**
 * The tracking carrier configured identifier
 * @member {String} carrier_id
 */
TrackingStatus.prototype['carrier_id'] = undefined;

/**
 * The shipment tracking number
 * @member {String} tracking_number
 */
TrackingStatus.prototype['tracking_number'] = undefined;

/**
 * The tracking details events
 * @member {Array.<module:model/TrackingEvent>} events
 */
TrackingStatus.prototype['events'] = undefined;

/**
 * Specified whether the related shipment was delivered
 * @member {Boolean} delivered
 */
TrackingStatus.prototype['delivered'] = undefined;

/**
 * Specified whether the object was created with a carrier in test mode
 * @member {Boolean} test_mode
 */
TrackingStatus.prototype['test_mode'] = undefined;

/**
 * Specified whether the shipment hasn't been picked up or is in an unknown state
 * @member {Boolean} pending
 */
TrackingStatus.prototype['pending'] = undefined;






export default TrackingStatus;

