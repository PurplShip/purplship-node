# ShipmentData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipper** | [**AddressData**](AddressData.md) |  | 
**recipient** | [**AddressData**](AddressData.md) |  | 
**parcels** | [**[ParcelData]**](ParcelData.md) | The shipment&#x27;s parcels | 
**options** | **Object** |  The options available for the shipment. Please consult the reference for additional specific carriers options.  | [optional] 
**payment** | [**PaymentData**](PaymentData.md) |  | [optional] 
**customs** | [**CustomsData**](CustomsData.md) |  | [optional] 
**doc_images** | [**[Doc]**](Doc.md) |  The list of documents to attach for a paperless interantional trade.  eg: Invoices...  | [optional] 
**reference** | **String** | The shipment reference | [optional] 
**label_type** | **String** | The shipment label file type. | [optional] [default to &#x27;PDF&#x27;]
**services** | **[String]** |  The requested carrier service for the shipment.  Please consult the reference for specific carriers services. Note that this is a list because on a Multi-carrier rate request you could specify a service per carrier.  | [optional] 
**carrier_ids** | **[String]** |  The list of configured carriers you wish to get rates from.  *Note that the request will be sent to all carriers in nothing is specified*  | [optional] 

<a name="LabelTypeEnum"></a>
## Enum: LabelTypeEnum

* `PDF` (value: `"PDF"`)
* `ZPL` (value: `"ZPL"`)
