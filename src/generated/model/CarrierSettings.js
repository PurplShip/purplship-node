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

/**
 * The CarrierSettings model module.
 * @module model/CarrierSettings
 * @version 2021.6
 */
class CarrierSettings {
    /**
     * Constructs a new <code>CarrierSettings</code>.
     * @alias module:model/CarrierSettings
     * @param id {String} A unique address identifier
     * @param carrier_name {module:model/CarrierSettings.CarrierNameEnum} Indicates a carrier (type)
     * @param carrier_id {String} Indicates a specific carrier configuration name.
     * @param test {Boolean}  The test flag indicates whether to use a carrier configured for test.  
     * @param active {Boolean}  The active flag indicates whether the carrier account is active or not.  
     */
    constructor(id, carrier_name, carrier_id, test, active) { 
        
        CarrierSettings.initialize(this, id, carrier_name, carrier_id, test, active);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, carrier_name, carrier_id, test, active) { 
        obj['id'] = id;
        obj['carrier_name'] = carrier_name;
        obj['carrier_id'] = carrier_id;
        obj['test'] = test;
        obj['active'] = active;
    }

    /**
     * Constructs a <code>CarrierSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CarrierSettings} obj Optional instance to populate.
     * @return {module:model/CarrierSettings} The populated <code>CarrierSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CarrierSettings();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('carrier_name')) {
                obj['carrier_name'] = ApiClient.convertToType(data['carrier_name'], 'String');
            }
            if (data.hasOwnProperty('carrier_id')) {
                obj['carrier_id'] = ApiClient.convertToType(data['carrier_id'], 'String');
            }
            if (data.hasOwnProperty('test')) {
                obj['test'] = ApiClient.convertToType(data['test'], 'Boolean');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * A unique address identifier
 * @member {String} id
 */
CarrierSettings.prototype['id'] = undefined;

/**
 * Indicates a carrier (type)
 * @member {module:model/CarrierSettings.CarrierNameEnum} carrier_name
 */
CarrierSettings.prototype['carrier_name'] = undefined;

/**
 * Indicates a specific carrier configuration name.
 * @member {String} carrier_id
 */
CarrierSettings.prototype['carrier_id'] = undefined;

/**
 *  The test flag indicates whether to use a carrier configured for test.  
 * @member {Boolean} test
 */
CarrierSettings.prototype['test'] = undefined;

/**
 *  The active flag indicates whether the carrier account is active or not.  
 * @member {Boolean} active
 */
CarrierSettings.prototype['active'] = undefined;





/**
 * Allowed values for the <code>carrier_name</code> property.
 * @enum {String}
 * @readonly
 */
CarrierSettings['CarrierNameEnum'] = {

    /**
     * value: "aramex"
     * @const
     */
    "aramex": "aramex",

    /**
     * value: "australiapost"
     * @const
     */
    "australiapost": "australiapost",

    /**
     * value: "canadapost"
     * @const
     */
    "canadapost": "canadapost",

    /**
     * value: "canpar"
     * @const
     */
    "canpar": "canpar",

    /**
     * value: "dhl_express"
     * @const
     */
    "dhl_express": "dhl_express",

    /**
     * value: "dhl_universal"
     * @const
     */
    "dhl_universal": "dhl_universal",

    /**
     * value: "dicom"
     * @const
     */
    "dicom": "dicom",

    /**
     * value: "eshipper"
     * @const
     */
    "eshipper": "eshipper",

    /**
     * value: "fedex"
     * @const
     */
    "fedex": "fedex",

    /**
     * value: "freightcom"
     * @const
     */
    "freightcom": "freightcom",

    /**
     * value: "purolator"
     * @const
     */
    "purolator": "purolator",

    /**
     * value: "royalmail"
     * @const
     */
    "royalmail": "royalmail",

    /**
     * value: "sendle"
     * @const
     */
    "sendle": "sendle",

    /**
     * value: "sf_express"
     * @const
     */
    "sf_express": "sf_express",

    /**
     * value: "tnt"
     * @const
     */
    "tnt": "tnt",

    /**
     * value: "ups"
     * @const
     */
    "ups": "ups",

    /**
     * value: "usps"
     * @const
     */
    "usps": "usps",

    /**
     * value: "usps_international"
     * @const
     */
    "usps_international": "usps_international",

    /**
     * value: "yanwen"
     * @const
     */
    "yanwen": "yanwen",

    /**
     * value: "yunexpress"
     * @const
     */
    "yunexpress": "yunexpress"
};



export default CarrierSettings;

