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
import Commodity from './Commodity';
import Duty from './Duty';

/**
 * The CustomsData model module.
 * @module model/CustomsData
 * @version 2021.6
 */
class CustomsData {
    /**
     * Constructs a new <code>CustomsData</code>.
     * @alias module:model/CustomsData
     */
    constructor() { 
        
        CustomsData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomsData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomsData} obj Optional instance to populate.
     * @return {module:model/CustomsData} The populated <code>CustomsData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomsData();

            if (data.hasOwnProperty('aes')) {
                obj['aes'] = ApiClient.convertToType(data['aes'], 'String');
            }
            if (data.hasOwnProperty('eel_pfc')) {
                obj['eel_pfc'] = ApiClient.convertToType(data['eel_pfc'], 'String');
            }
            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
            }
            if (data.hasOwnProperty('content_description')) {
                obj['content_description'] = ApiClient.convertToType(data['content_description'], 'String');
            }
            if (data.hasOwnProperty('incoterm')) {
                obj['incoterm'] = ApiClient.convertToType(data['incoterm'], 'String');
            }
            if (data.hasOwnProperty('commodities')) {
                obj['commodities'] = ApiClient.convertToType(data['commodities'], [Commodity]);
            }
            if (data.hasOwnProperty('duty')) {
                obj['duty'] = Duty.constructFromObject(data['duty']);
            }
            if (data.hasOwnProperty('invoice')) {
                obj['invoice'] = ApiClient.convertToType(data['invoice'], 'String');
            }
            if (data.hasOwnProperty('invoice_date')) {
                obj['invoice_date'] = ApiClient.convertToType(data['invoice_date'], 'String');
            }
            if (data.hasOwnProperty('commercial_invoice')) {
                obj['commercial_invoice'] = ApiClient.convertToType(data['commercial_invoice'], 'Boolean');
            }
            if (data.hasOwnProperty('certify')) {
                obj['certify'] = ApiClient.convertToType(data['certify'], 'Boolean');
            }
            if (data.hasOwnProperty('signer')) {
                obj['signer'] = ApiClient.convertToType(data['signer'], 'String');
            }
            if (data.hasOwnProperty('certificate_number')) {
                obj['certificate_number'] = ApiClient.convertToType(data['certificate_number'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {String} aes
 */
CustomsData.prototype['aes'] = undefined;

/**
 * @member {String} eel_pfc
 */
CustomsData.prototype['eel_pfc'] = undefined;

/**
 * @member {module:model/CustomsData.ContentTypeEnum} content_type
 */
CustomsData.prototype['content_type'] = undefined;

/**
 * @member {String} content_description
 */
CustomsData.prototype['content_description'] = undefined;

/**
 * The customs 'term of trade' also known as 'incoterm'
 * @member {module:model/CustomsData.IncotermEnum} incoterm
 */
CustomsData.prototype['incoterm'] = undefined;

/**
 * The parcel content items
 * @member {Array.<module:model/Commodity>} commodities
 */
CustomsData.prototype['commodities'] = undefined;

/**
 * @member {module:model/Duty} duty
 */
CustomsData.prototype['duty'] = undefined;

/**
 * The invoice reference number
 * @member {String} invoice
 */
CustomsData.prototype['invoice'] = undefined;

/**
 * The invoice date
 * @member {String} invoice_date
 */
CustomsData.prototype['invoice_date'] = undefined;

/**
 * Indicates if the shipment is commercial
 * @member {Boolean} commercial_invoice
 */
CustomsData.prototype['commercial_invoice'] = undefined;

/**
 * Indicate that signer certified confirmed all
 * @member {Boolean} certify
 */
CustomsData.prototype['certify'] = undefined;

/**
 * @member {String} signer
 */
CustomsData.prototype['signer'] = undefined;

/**
 * @member {String} certificate_number
 */
CustomsData.prototype['certificate_number'] = undefined;

/**
 * @member {Object} options
 */
CustomsData.prototype['options'] = undefined;





/**
 * Allowed values for the <code>content_type</code> property.
 * @enum {String}
 * @readonly
 */
CustomsData['ContentTypeEnum'] = {

    /**
     * value: "documents"
     * @const
     */
    "documents": "documents",

    /**
     * value: "gift"
     * @const
     */
    "gift": "gift",

    /**
     * value: "sample"
     * @const
     */
    "sample": "sample",

    /**
     * value: "merchandise"
     * @const
     */
    "merchandise": "merchandise",

    /**
     * value: "return_merchandise"
     * @const
     */
    "return_merchandise": "return_merchandise",

    /**
     * value: "other"
     * @const
     */
    "other": "other"
};


/**
 * Allowed values for the <code>incoterm</code> property.
 * @enum {String}
 * @readonly
 */
CustomsData['IncotermEnum'] = {

    /**
     * value: "CFR"
     * @const
     */
    "CFR": "CFR",

    /**
     * value: "CIF"
     * @const
     */
    "CIF": "CIF",

    /**
     * value: "CIP"
     * @const
     */
    "CIP": "CIP",

    /**
     * value: "CPT"
     * @const
     */
    "CPT": "CPT",

    /**
     * value: "DAF"
     * @const
     */
    "DAF": "DAF",

    /**
     * value: "DDP"
     * @const
     */
    "DDP": "DDP",

    /**
     * value: "DDU"
     * @const
     */
    "DDU": "DDU",

    /**
     * value: "DEQ"
     * @const
     */
    "DEQ": "DEQ",

    /**
     * value: "DES"
     * @const
     */
    "DES": "DES",

    /**
     * value: "EXW"
     * @const
     */
    "EXW": "EXW",

    /**
     * value: "FAS"
     * @const
     */
    "FAS": "FAS",

    /**
     * value: "FCA"
     * @const
     */
    "FCA": "FCA",

    /**
     * value: "FOB"
     * @const
     */
    "FOB": "FOB"
};



export default CustomsData;

