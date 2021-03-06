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
import Operation from '../model/Operation';
import Webhook from '../model/Webhook';
import WebhookData from '../model/WebhookData';
import WebhookList from '../model/WebhookList';
import WebhookTestRequest from '../model/WebhookTestRequest';

/**
* Webhooks service.
* @module api/WebhooksApi
* @version 2021.6
*/
export default class WebhooksApi {

    /**
    * Constructs a new WebhooksApi. 
    * @alias module:api/WebhooksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the create operation.
     * @callback module:api/WebhooksApi~createCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Webhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a webhook
     * Create a new webhook.
     * @param {module:model/WebhookData} data 
     * @param {module:api/WebhooksApi~createCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Webhook}
     */
    create(data, callback) {
      let postBody = data;
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling create");
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
      let returnType = Webhook;
      return this.apiClient.callApi(
        '/v1/webhooks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the list operation.
     * @callback module:api/WebhooksApi~listCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all webhooks
     * Retrieve all webhooks.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @param {Boolean} opts.test_mode This flag filter out webhooks created in test or live mode
     * @param {module:api/WebhooksApi~listCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookList}
     */
    list(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'test_mode': opts['test_mode']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = WebhookList;
      return this.apiClient.callApi(
        '/v1/webhooks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the remove operation.
     * @callback module:api/WebhooksApi~removeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Operation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a webhook
     * Remove a webhook.
     * @param {String} id 
     * @param {module:api/WebhooksApi~removeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Operation}
     */
    remove(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling remove");
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
      let returnType = Operation;
      return this.apiClient.callApi(
        '/v1/webhooks/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieve operation.
     * @callback module:api/WebhooksApi~retrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Webhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a webhook
     * Retrieve a webhook.
     * @param {String} id 
     * @param {module:api/WebhooksApi~retrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Webhook}
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
      let returnType = Webhook;
      return this.apiClient.callApi(
        '/v1/webhooks/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the test operation.
     * @callback module:api/WebhooksApi~testCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Operation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Test a webhook
     * test a webhook.
     * @param {String} id 
     * @param {module:model/WebhookTestRequest} data 
     * @param {module:api/WebhooksApi~testCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Operation}
     */
    test(id, data, callback) {
      let postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling test");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling test");
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
      let returnType = Operation;
      return this.apiClient.callApi(
        '/v1/webhooks/{id}/test', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update operation.
     * @callback module:api/WebhooksApi~updateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Webhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a webhook
     * update a webhook.
     * @param {String} id 
     * @param {module:model/WebhookData} data 
     * @param {module:api/WebhooksApi~updateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Webhook}
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
      let returnType = Webhook;
      return this.apiClient.callApi(
        '/v1/webhooks/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
