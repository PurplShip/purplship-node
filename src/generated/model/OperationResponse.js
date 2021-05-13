/**
 * Purplship API
 *  ## API Reference  Purplship is an open source multi-carrier shipping API that simplifies the integration of logistic carrier services.  The Purplship API is organized around REST. Our API has predictable resource-oriented URLs, accepts JSON-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.  The Purplship API differs for every account as we release new versions. These docs are customized to your version of the API.   ## Versioning  When backwards-incompatible changes are made to the API, a new, dated version is released.  The current version is `2021.4`.   Read our API changelog and to learn more about backwards compatibility.  As a precaution, use API versioning to check a new API version before committing to an upgrade. 
 *
 * The version of the OpenAPI document: 2021.4
 * Contact: hello@purplship.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Message from './Message';
import OperationConfirmation from './OperationConfirmation';

/**
 * The OperationResponse model module.
 * @module model/OperationResponse
 * @version 2021.4
 */
class OperationResponse {
    /**
     * Constructs a new <code>OperationResponse</code>.
     * @alias module:model/OperationResponse
     */
    constructor() { 
        
        OperationResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OperationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OperationResponse} obj Optional instance to populate.
     * @return {module:model/OperationResponse} The populated <code>OperationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OperationResponse();

            if (data.hasOwnProperty('messages')) {
                obj['messages'] = ApiClient.convertToType(data['messages'], [Message]);
            }
            if (data.hasOwnProperty('confirmation')) {
                obj['confirmation'] = OperationConfirmation.constructFromObject(data['confirmation']);
            }
        }
        return obj;
    }


}

/**
 * The list of note or warning messages
 * @member {Array.<module:model/Message>} messages
 */
OperationResponse.prototype['messages'] = undefined;

/**
 * @member {module:model/OperationConfirmation} confirmation
 */
OperationResponse.prototype['confirmation'] = undefined;






export default OperationResponse;

