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
import Payment from './Payment';
import Rate from './Rate';

/**
* The ShippingRequest model module.
* @module model/ShippingRequest
* @version v1-2020.12.1
*/
export default class ShippingRequest {
    /**
    * Constructs a new <code>ShippingRequest</code>.
    * @alias module:model/ShippingRequest
    * @class
    * @param shipper {module:model/AddressData} 
    * @param recipient {module:model/AddressData} 
    * @param parcels {Array.<module:model/ParcelData>} The shipment's parcels
    * @param payment {module:model/Payment} 
    * @param selected_rate_id {String} The shipment selected rate.
    * @param rates {Array.<module:model/Rate>} The list for shipment rates fetched previously
    */

    constructor(shipper, recipient, parcels, payment, selected_rate_id, rates) {
        
        
        this['shipper'] = shipper;
        this['recipient'] = recipient;
        this['parcels'] = parcels;
        this['payment'] = payment;
        this['selected_rate_id'] = selected_rate_id;
        this['rates'] = rates;
        
    }

    /**
    * Constructs a <code>ShippingRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ShippingRequest} obj Optional instance to populate.
    * @return {module:model/ShippingRequest} The populated <code>ShippingRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShippingRequest();
                        
            
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
                obj['payment'] = Payment.constructFromObject(data['payment']);
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
            if (data.hasOwnProperty('selected_rate_id')) {
                obj['selected_rate_id'] = ApiClient.convertToType(data['selected_rate_id'], 'String');
            }
            if (data.hasOwnProperty('rates')) {
                obj['rates'] = ApiClient.convertToType(data['rates'], [Rate]);
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
    * @member {module:model/Payment} payment
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
    * @member {module:model/ShippingRequest.LabelTypeEnum} label_type
    * @default 'PDF'
    */
    'label_type' = 'PDF';
    /**
    * The shipment selected rate.
    * @member {String} selected_rate_id
    */
    'selected_rate_id' = undefined;
    /**
    * The list for shipment rates fetched previously
    * @member {Array.<module:model/Rate>} rates
    */
    'rates' = undefined;



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
