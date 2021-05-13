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


import ApiClient from "../ApiClient";
import CommodityData from '../model/CommodityData';
import Customs from '../model/Customs';
import CustomsData from '../model/CustomsData';
import CustomsList from '../model/CustomsList';
import ErrorResponse from '../model/ErrorResponse';
import Operation from '../model/Operation';

/**
* Customs service.
* @module api/CustomsApi
* @version 2021.4
*/
export default class CustomsApi {

    /**
    * Constructs a new CustomsApi. 
    * @alias module:api/CustomsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addCommodity operation.
     * @callback module:api/CustomsApi~addCommodityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Customs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a commodity
     * Add a customs commodity.
     * @param {String} id 
     * @param {module:model/CommodityData} data 
     * @param {module:api/CustomsApi~addCommodityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Customs}
     */
    addCommodity(id, data, callback) {
      let postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addCommodity");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling addCommodity");
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
      let returnType = Customs;
      return this.apiClient.callApi(
        '/v1/customs_info/{id}/commodities', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the create operation.
     * @callback module:api/CustomsApi~createCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Customs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a customs info
     * Create a new customs declaration.
     * @param {module:model/CustomsData} data 
     * @param {module:api/CustomsApi~createCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Customs}
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
      let returnType = Customs;
      return this.apiClient.callApi(
        '/v1/customs_info', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the discard operation.
     * @callback module:api/CustomsApi~discardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Operation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Discard a customs info
     * Discard a customs declaration.
     * @param {String} id 
     * @param {module:api/CustomsApi~discardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Operation}
     */
    discard(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling discard");
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
        '/v1/customs_info/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the discardCommodity operation.
     * @callback module:api/CustomsApi~discardCommodityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Operation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Discard a commodity
     * Discard a customs commodity.
     * @param {String} ck 
     * @param {String} id 
     * @param {module:api/CustomsApi~discardCommodityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Operation}
     */
    discardCommodity(ck, id, callback) {
      let postBody = null;
      // verify the required parameter 'ck' is set
      if (ck === undefined || ck === null) {
        throw new Error("Missing the required parameter 'ck' when calling discardCommodity");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling discardCommodity");
      }

      let pathParams = {
        'ck': ck,
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
        '/v1/customs_info/{id}/commodities/{ck}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the list operation.
     * @callback module:api/CustomsApi~listCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomsList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all customs info
     * Retrieve all stored customs declarations.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @param {module:api/CustomsApi~listCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomsList}
     */
    list(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
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
      let returnType = CustomsList;
      return this.apiClient.callApi(
        '/v1/customs_info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieve operation.
     * @callback module:api/CustomsApi~retrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Customs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a customs info
     * Retrieve customs declaration.
     * @param {String} id 
     * @param {module:api/CustomsApi~retrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Customs}
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
      let returnType = Customs;
      return this.apiClient.callApi(
        '/v1/customs_info/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update operation.
     * @callback module:api/CustomsApi~updateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Customs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a customs info
     * modify an existing customs declaration.
     * @param {String} id 
     * @param {module:model/CustomsData} data 
     * @param {module:api/CustomsApi~updateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Customs}
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
      let returnType = Customs;
      return this.apiClient.callApi(
        '/v1/customs_info/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
