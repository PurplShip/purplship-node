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
import Parcel from './Parcel';

/**
* The PickupUpdateRequest model module.
* @module model/PickupUpdateRequest
* @version v1-2020.12.1
*/
export default class PickupUpdateRequest {
    /**
    * Constructs a new <code>PickupUpdateRequest</code>.
    * @alias module:model/PickupUpdateRequest
    * @class
    * @param pickup_date {String}  The expected pickup date  Date Format: `YYYY-MM-DD` 
    * @param address {module:model/Address} 
    * @param parcels {Array.<module:model/Parcel>} The shipment parcels to pickup.
    * @param confirmation_number {String} pickup identification number
    * @param ready_time {String}  The ready time for pickup.  Time Format: `HH:MM` 
    * @param closing_time {String}  The closing or late time of the pickup  Time Format: `HH:MM` 
    */

    constructor(pickup_date, address, parcels, confirmation_number, ready_time, closing_time) {
        
        
        this['pickup_date'] = pickup_date;
        this['address'] = address;
        this['parcels'] = parcels;
        this['confirmation_number'] = confirmation_number;
        this['ready_time'] = ready_time;
        this['closing_time'] = closing_time;
        
    }

    /**
    * Constructs a <code>PickupUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PickupUpdateRequest} obj Optional instance to populate.
    * @return {module:model/PickupUpdateRequest} The populated <code>PickupUpdateRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PickupUpdateRequest();
                        
            
            if (data.hasOwnProperty('pickup_date')) {
                obj['pickup_date'] = ApiClient.convertToType(data['pickup_date'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = Address.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('parcels')) {
                obj['parcels'] = ApiClient.convertToType(data['parcels'], [Parcel]);
            }
            if (data.hasOwnProperty('confirmation_number')) {
                obj['confirmation_number'] = ApiClient.convertToType(data['confirmation_number'], 'String');
            }
            if (data.hasOwnProperty('ready_time')) {
                obj['ready_time'] = ApiClient.convertToType(data['ready_time'], 'String');
            }
            if (data.hasOwnProperty('closing_time')) {
                obj['closing_time'] = ApiClient.convertToType(data['closing_time'], 'String');
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
        }
        return obj;
    }

    /**
    *  The expected pickup date  Date Format: `YYYY-MM-DD` 
    * @member {String} pickup_date
    */
    'pickup_date' = undefined;
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
    * pickup identification number
    * @member {String} confirmation_number
    */
    'confirmation_number' = undefined;
    /**
    *  The ready time for pickup.  Time Format: `HH:MM` 
    * @member {String} ready_time
    */
    'ready_time' = undefined;
    /**
    *  The closing or late time of the pickup  Time Format: `HH:MM` 
    * @member {String} closing_time
    */
    'closing_time' = undefined;
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




}
