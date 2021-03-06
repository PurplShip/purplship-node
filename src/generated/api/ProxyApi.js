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


import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';
import OperationResponse from '../model/OperationResponse';
import PickupCancelRequest from '../model/PickupCancelRequest';
import PickupRequest from '../model/PickupRequest';
import PickupResponse from '../model/PickupResponse';
import PickupUpdateRequest from '../model/PickupUpdateRequest';
import RateRequest from '../model/RateRequest';
import RateResponse from '../model/RateResponse';
import Shipment from '../model/Shipment';
import ShipmentCancelRequest from '../model/ShipmentCancelRequest';
import ShippingRequest from '../model/ShippingRequest';
import TrackingResponse from '../model/TrackingResponse';

/**
* Proxy service.
* @module api/ProxyApi
* @version 2021.6
*/
export default class ProxyApi {

    /**
    * Constructs a new ProxyApi. 
    * @alias module:api/ProxyApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the buyLabel operation.
     * @callback module:api/ProxyApi~buyLabelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Shipment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Buy a shipment label
     * Once the shipping rates are retrieved, provide the required info to submit the shipment by specifying your preferred rate.
     * @param {module:model/ShippingRequest} data 
     * @param {module:api/ProxyApi~buyLabelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Shipment}
     */
    buyLabel(data, callback) {
      let postBody = data;
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling buyLabel");
      }

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
        '/v1/proxy/shipping', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cancelPickup operation.
     * @callback module:api/ProxyApi~cancelPickupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OperationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel a pickup
     * Cancel a pickup previously scheduled
     * @param {String} carrier_name 
     * @param {module:model/PickupCancelRequest} data 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.test The test flag indicates whether to use a carrier configured for test. (default to false)
     * @param {module:api/ProxyApi~cancelPickupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OperationResponse}
     */
    cancelPickup(carrier_name, data, opts, callback) {
      opts = opts || {};
      let postBody = data;
      // verify the required parameter 'carrier_name' is set
      if (carrier_name === undefined || carrier_name === null) {
        throw new Error("Missing the required parameter 'carrier_name' when calling cancelPickup");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling cancelPickup");
      }

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
        '/v1/proxy/pickups/{carrier_name}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the fetchRates operation.
     * @callback module:api/ProxyApi~fetchRatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch shipment rates
     *  The Shipping process begins by fetching rates for your shipment. Use this service to fetch a shipping rates available. 
     * @param {module:model/RateRequest} data 
     * @param {module:api/ProxyApi~fetchRatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RateResponse}
     */
    fetchRates(data, callback) {
      let postBody = data;
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling fetchRates");
      }

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
      let returnType = RateResponse;
      return this.apiClient.callApi(
        '/v1/proxy/rates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the schedulePickup operation.
     * @callback module:api/ProxyApi~schedulePickupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PickupResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Schedule a pickup
     * Schedule one or many parcels pickup
     * @param {String} carrier_name 
     * @param {module:model/PickupRequest} data 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.test The test flag indicates whether to use a carrier configured for test. (default to false)
     * @param {module:api/ProxyApi~schedulePickupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PickupResponse}
     */
    schedulePickup(carrier_name, data, opts, callback) {
      opts = opts || {};
      let postBody = data;
      // verify the required parameter 'carrier_name' is set
      if (carrier_name === undefined || carrier_name === null) {
        throw new Error("Missing the required parameter 'carrier_name' when calling schedulePickup");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling schedulePickup");
      }

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
      let returnType = PickupResponse;
      return this.apiClient.callApi(
        '/v1/proxy/pickups/{carrier_name}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the trackShipment operation.
     * @callback module:api/ProxyApi~trackShipmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TrackingResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Track a shipment
     * You can track a shipment by specifying the carrier and the shipment tracking number.
     * @param {String} carrier_name 
     * @param {String} tracking_number 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.test The test flag indicates whether to use a carrier configured for test. (default to false)
     * @param {module:api/ProxyApi~trackShipmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TrackingResponse}
     */
    trackShipment(carrier_name, tracking_number, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'carrier_name' is set
      if (carrier_name === undefined || carrier_name === null) {
        throw new Error("Missing the required parameter 'carrier_name' when calling trackShipment");
      }
      // verify the required parameter 'tracking_number' is set
      if (tracking_number === undefined || tracking_number === null) {
        throw new Error("Missing the required parameter 'tracking_number' when calling trackShipment");
      }

      let pathParams = {
        'carrier_name': carrier_name,
        'tracking_number': tracking_number
      };
      let queryParams = {
        'test': opts['test']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TrackingResponse;
      return this.apiClient.callApi(
        '/v1/proxy/tracking/{carrier_name}/{tracking_number}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePickup operation.
     * @callback module:api/ProxyApi~updatePickupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PickupResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a pickup
     * Modify a scheduled pickup
     * @param {String} carrier_name 
     * @param {module:model/PickupUpdateRequest} data 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.test The test flag indicates whether to use a carrier configured for test. (default to false)
     * @param {module:api/ProxyApi~updatePickupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PickupResponse}
     */
    updatePickup(carrier_name, data, opts, callback) {
      opts = opts || {};
      let postBody = data;
      // verify the required parameter 'carrier_name' is set
      if (carrier_name === undefined || carrier_name === null) {
        throw new Error("Missing the required parameter 'carrier_name' when calling updatePickup");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling updatePickup");
      }

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
      let returnType = PickupResponse;
      return this.apiClient.callApi(
        '/v1/proxy/pickups/{carrier_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the voidLabel operation.
     * @callback module:api/ProxyApi~voidLabelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OperationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Void a shipment label
     * Cancel a shipment and the label previously created
     * @param {String} carrier_name 
     * @param {module:model/ShipmentCancelRequest} data 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.test The test flag indicates whether to use a carrier configured for test. (default to false)
     * @param {module:api/ProxyApi~voidLabelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OperationResponse}
     */
    voidLabel(carrier_name, data, opts, callback) {
      opts = opts || {};
      let postBody = data;
      // verify the required parameter 'carrier_name' is set
      if (carrier_name === undefined || carrier_name === null) {
        throw new Error("Missing the required parameter 'carrier_name' when calling voidLabel");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling voidLabel");
      }

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
        '/v1/proxy/shipping/{carrier_name}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
