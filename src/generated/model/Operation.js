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

/**
* The Operation model module.
* @module model/Operation
* @version v1-2020.12.1
*/
export default class Operation {
    /**
    * Constructs a new <code>Operation</code>.
    * @alias module:model/Operation
    * @class
    * @param operation {String} Operation performed
    * @param success {Boolean} Specify whether the operation was successful
    */

    constructor(operation, success) {
        
        
        this['operation'] = operation;
        this['success'] = success;
        
    }

    /**
    * Constructs a <code>Operation</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Operation} obj Optional instance to populate.
    * @return {module:model/Operation} The populated <code>Operation</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Operation();
                        
            
            if (data.hasOwnProperty('operation')) {
                obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * Operation performed
    * @member {String} operation
    */
    'operation' = undefined;
    /**
    * Specify whether the operation was successful
    * @member {Boolean} success
    */
    'success' = undefined;




}
