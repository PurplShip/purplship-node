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
import AddressData from './AddressData';
import CustomsData from './CustomsData';
import Doc from './Doc';
import ParcelData from './ParcelData';
import PaymentData from './PaymentData';

/**
* The ShipmentData model module.
* @module model/ShipmentData
* @version v1-2020.12.1
*/
export default class ShipmentData {
    /**
    * Constructs a new <code>ShipmentData</code>.
    * @alias module:model/ShipmentData
    * @class
    * @param shipper {module:model/AddressData} 
    * @param recipient {module:model/AddressData} 
    * @param parcels {Array.<module:model/ParcelData>} The shipment's parcels
    */

    constructor(shipper, recipient, parcels) {
        
        
        this['shipper'] = shipper;
        this['recipient'] = recipient;
        this['parcels'] = parcels;
        
    }

    /**
    * Constructs a <code>ShipmentData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ShipmentData} obj Optional instance to populate.
    * @return {module:model/ShipmentData} The populated <code>ShipmentData</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShipmentData();
                        
            
            if (data.hasOwnProperty('shipper')) {
                obj['shipper'] = AddressData.constructFromObject(data['shipper']);
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = AddressData.constructFromObject(data['recipient']);
            }
            if (data.hasOwnProperty('parcels')) {
                obj['parcels'] = ApiClient.convertToType(data['parcels'], [ParcelData]);
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], Object);
            }
            if (data.hasOwnProperty('payment')) {
                obj['payment'] = PaymentData.constructFromObject(data['payment']);
            }
            if (data.hasOwnProperty('customs')) {
                obj['customs'] = CustomsData.constructFromObject(data['customs']);
            }
            if (data.hasOwnProperty('doc_images')) {
                obj['doc_images'] = ApiClient.convertToType(data['doc_images'], [Doc]);
            }
            if (data.hasOwnProperty('reference')) {
                obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
            }
            if (data.hasOwnProperty('label_type')) {
                obj['label_type'] = ApiClient.convertToType(data['label_type'], 'String');
            }
            if (data.hasOwnProperty('services')) {
                obj['services'] = ApiClient.convertToType(data['services'], ['String']);
            }
            if (data.hasOwnProperty('carrier_ids')) {
                obj['carrier_ids'] = ApiClient.convertToType(data['carrier_ids'], ['String']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/AddressData} shipper
    */
    'shipper' = undefined;
    /**
    * @member {module:model/AddressData} recipient
    */
    'recipient' = undefined;
    /**
    * The shipment's parcels
    * @member {Array.<module:model/ParcelData>} parcels
    */
    'parcels' = undefined;
    /**
    *  The options available for the shipment.<br/> Please consult [the reference](#operation/references) for additional specific carriers options. 
    * @member {Object} options
    */
    'options' = undefined;
    /**
    * @member {module:model/PaymentData} payment
    */
    'payment' = undefined;
    /**
    * @member {module:model/CustomsData} customs
    */
    'customs' = undefined;
    /**
    *  The list of documents to attach for a paperless interantional trade.  eg: Invoices... 
    * @member {Array.<module:model/Doc>} doc_images
    */
    'doc_images' = undefined;
    /**
    * The shipment reference
    * @member {String} reference
    */
    'reference' = undefined;
    /**
    * The shipment label file type.
    * @member {module:model/ShipmentData.LabelTypeEnum} label_type
    * @default 'PDF'
    */
    'label_type' = 'PDF';
    /**
    *  The requested carrier service for the shipment.  Please consult [the reference](#operation/references) for specific carriers services.<br/> Note that this is a list because on a Multi-carrier rate request you could specify a service per carrier. 
    * @member {Array.<String>} services
    */
    'services' = undefined;
    /**
    *  The list of configured carriers you wish to get rates from.  *Note that the request will be sent to all carriers in nothing is specified* 
    * @member {Array.<String>} carrier_ids
    */
    'carrier_ids' = undefined;



    /**
    * Allowed values for the <code>label_type</code> property.
    * @enum {String}
    * @readonly
    */
    static LabelTypeEnum = {
        /**
         * value: "PDF"
         * @const
         */
        "PDF": "PDF",
        /**
         * value: "ZPL"
         * @const
         */
        "ZPL": "ZPL"    };

}
