/**
 * Purplship Open Source Multi-carrier Shipping API
 *  Purplship is an open source multi-carrier shipping API that simplifies the integration of logistic carrier services  The **proxy** endpoints are stateless and forwards calls to carriers web services. 
 *
 * OpenAPI spec version: v1-2020.12.1
 * Contact: hello@purplship.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Address from './Address';
import Charge from './Charge';
import Parcel from './Parcel';

/**
* The Pickup model module.
* @module model/Pickup
* @version v1-2020.12.1
*/
export default class Pickup {
    /**
    * Constructs a new <code>Pickup</code>.
    * The scheduled pickup&#x27;s summary
    * @alias module:model/Pickup
    * @class
    * @param carrier_name {String} The pickup carrier
    * @param carrier_id {String} The pickup carrier configured name
    * @param confirmation_number {String} The pickup confirmation identifier
    * @param address {module:model/Address} 
    * @param parcels {Array.<module:model/Parcel>} The shipment parcels to pickup.
    * @param test_mode {Boolean} Specified whether it was created with a carrier in test mode
    */

    constructor(carrier_name, carrier_id, confirmation_number, address, parcels, test_mode) {
        
        
        this['carrier_name'] = carrier_name;
        this['carrier_id'] = carrier_id;
        this['confirmation_number'] = confirmation_number;
        this['address'] = address;
        this['parcels'] = parcels;
        this['test_mode'] = test_mode;
        
    }

    /**
    * Constructs a <code>Pickup</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Pickup} obj Optional instance to populate.
    * @return {module:model/Pickup} The populated <code>Pickup</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Pickup();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('carrier_name')) {
                obj['carrier_name'] = ApiClient.convertToType(data['carrier_name'], 'String');
            }
            if (data.hasOwnProperty('carrier_id')) {
                obj['carrier_id'] = ApiClient.convertToType(data['carrier_id'], 'String');
            }
            if (data.hasOwnProperty('confirmation_number')) {
                obj['confirmation_number'] = ApiClient.convertToType(data['confirmation_number'], 'String');
            }
            if (data.hasOwnProperty('pickup_date')) {
                obj['pickup_date'] = ApiClient.convertToType(data['pickup_date'], 'String');
            }
            if (data.hasOwnProperty('pickup_charge')) {
                obj['pickup_charge'] = Charge.constructFromObject(data['pickup_charge']);
            }
            if (data.hasOwnProperty('ready_time')) {
                obj['ready_time'] = ApiClient.convertToType(data['ready_time'], 'String');
            }
            if (data.hasOwnProperty('closing_time')) {
                obj['closing_time'] = ApiClient.convertToType(data['closing_time'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = Address.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('parcels')) {
                obj['parcels'] = ApiClient.convertToType(data['parcels'], [Parcel]);
            }
            if (data.hasOwnProperty('instruction')) {
                obj['instruction'] = ApiClient.convertToType(data['instruction'], 'String');
            }
            if (data.hasOwnProperty('package_location')) {
                obj['package_location'] = ApiClient.convertToType(data['package_location'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], Object);
            }
            if (data.hasOwnProperty('test_mode')) {
                obj['test_mode'] = ApiClient.convertToType(data['test_mode'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * A unique pickup identifier
    * @member {String} id
    */
    'id' = undefined;
    /**
    * The pickup carrier
    * @member {String} carrier_name
    */
    'carrier_name' = undefined;
    /**
    * The pickup carrier configured name
    * @member {String} carrier_id
    */
    'carrier_id' = undefined;
    /**
    * The pickup confirmation identifier
    * @member {String} confirmation_number
    */
    'confirmation_number' = undefined;
    /**
    * The pickup date
    * @member {String} pickup_date
    */
    'pickup_date' = undefined;
    /**
    * @member {module:model/Charge} pickup_charge
    */
    'pickup_charge' = undefined;
    /**
    * The pickup expected ready time
    * @member {String} ready_time
    */
    'ready_time' = undefined;
    /**
    * The pickup expected closing or late time
    * @member {String} closing_time
    */
    'closing_time' = undefined;
    /**
    * @member {module:model/Address} address
    */
    'address' = undefined;
    /**
    * The shipment parcels to pickup.
    * @member {Array.<module:model/Parcel>} parcels
    */
    'parcels' = undefined;
    /**
    *  The pickup instruction.  eg: Handle with care. 
    * @member {String} instruction
    */
    'instruction' = undefined;
    /**
    *  The package(s) location.  eg: Behind the entrance door. 
    * @member {String} package_location
    */
    'package_location' = undefined;
    /**
    * Advanced carrier specific pickup options
    * @member {Object} options
    */
    'options' = undefined;
    /**
    * Specified whether it was created with a carrier in test mode
    * @member {Boolean} test_mode
    */
    'test_mode' = undefined;




}