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

import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';
import OperationResponse from '../model/OperationResponse';
import Shipment from '../model/Shipment';
import ShipmentCancelRequest from '../model/ShipmentCancelRequest';
import ShippingRequest from '../model/ShippingRequest';

/**
* Shipping service.
* @module api/ShippingApi
* @version v1-2020.12.1
*/
export default class ShippingApi {

    /**
    * Constructs a new ShippingApi. 
    * @alias module:api/ShippingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the buyLabel operation.
     * @callback module:api/ShippingApi~buyLabelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Shipment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Buy a shipment label
     * **[proxy]**  Once the shipping rates are retrieved, provide the required info to submit the shipment by specifying your preferred rate.
     * @param {module:api/ShippingApi~buyLabelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Shipment}
     */
    buyLabel(body, callback) {
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Shipment;

      return this.apiClient.callApi(
        '/proxy/shipping', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the voidLabel operation.
     * @callback module:api/ShippingApi~voidLabelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OperationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Void a shipment label
     * **[proxy]**  Cancel a shipment and the label previously created
     * @param {Object} opts Optional parameters
     * @param {module:api/ShippingApi~voidLabelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OperationResponse}
     */
    voidLabel(body, carrier_name, opts, callback) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
        'carrier_name': carrier_name
      };
      let queryParams = {
        'test': opts['test']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OperationResponse;

      return this.apiClient.callApi(
        '/proxy/shipping/{carrier_name}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
