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
import OperationConfirmation from '../model/OperationConfirmation';
import Pickup from '../model/Pickup';
import PickupCancelData from '../model/PickupCancelData';
import PickupData from '../model/PickupData';
import PickupList from '../model/PickupList';
import PickupUpdateData from '../model/PickupUpdateData';

/**
* Pickups service.
* @module api/PickupsApi
* @version 2021.6
*/
export default class PickupsApi {

    /**
    * Constructs a new PickupsApi. 
    * @alias module:api/PickupsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the cancel operation.
     * @callback module:api/PickupsApi~cancelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OperationConfirmation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel a pickup
     * Cancel a pickup of one or more shipments.
     * @param {String} id 
     * @param {module:model/PickupCancelData} data 
     * @param {module:api/PickupsApi~cancelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OperationConfirmation}
     */
    cancel(id, data, callback) {
      let postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling cancel");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling cancel");
      }

      let pathParams = {
        'id': id
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
      let returnType = OperationConfirmation;
      return this.apiClient.callApi(
        '/v1/pickups/{id}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the list operation.
     * @callback module:api/PickupsApi~listCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PickupList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List shipment pickups
     * Retrieve all scheduled pickups.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.test_mode 
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @param {module:api/PickupsApi~listCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PickupList}
     */
    list(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'test_mode': opts['test_mode'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PickupList;
      return this.apiClient.callApi(
        '/v1/pickups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieve operation.
     * @callback module:api/PickupsApi~retrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pickup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a pickup
     * Retrieve a scheduled pickup.
     * @param {String} id 
     * @param {module:api/PickupsApi~retrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pickup}
     */
    retrieve(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling retrieve");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Pickup;
      return this.apiClient.callApi(
        '/v1/pickups/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the schedule operation.
     * @callback module:api/PickupsApi~scheduleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pickup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Schedule a pickup
     * Schedule a pickup for one or many shipments with labels already purchased.
     * @param {String} carrier_name 
     * @param {module:model/PickupData} data 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.test The test flag indicates whether to use a carrier configured for test. (default to false)
     * @param {module:api/PickupsApi~scheduleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pickup}
     */
    schedule(carrier_name, data, opts, callback) {
      opts = opts || {};
      let postBody = data;
      // verify the required parameter 'carrier_name' is set
      if (carrier_name === undefined || carrier_name === null) {
        throw new Error("Missing the required parameter 'carrier_name' when calling schedule");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling schedule");
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
      let returnType = Pickup;
      return this.apiClient.callApi(
        '/v1/pickups/{carrier_name}/schedule', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update operation.
     * @callback module:api/PickupsApi~updateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OperationConfirmation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a pickup
     * Modify a pickup for one or many shipments with labels already purchased.
     * @param {String} id 
     * @param {module:model/PickupUpdateData} data 
     * @param {module:api/PickupsApi~updateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OperationConfirmation}
     */
    update(id, data, callback) {
      let postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling update");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling update");
      }

      let pathParams = {
        'id': id
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
      let returnType = OperationConfirmation;
      return this.apiClient.callApi(
        '/v1/pickups/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
