# PurplshipApi.PickupUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pickup_date** | **String** |  The expected pickup date  Date Format: &#x60;YYYY-MM-DD&#x60;  | 
**address** | [**Address**](Address.md) |  | 
**parcels** | [**[Parcel]**](Parcel.md) | The shipment parcels to pickup. | 
**confirmation_number** | **String** | pickup identification number | 
**ready_time** | **String** |  The ready time for pickup.  Time Format: &#x60;HH:MM&#x60;  | 
**closing_time** | **String** |  The closing or late time of the pickup  Time Format: &#x60;HH:MM&#x60;  | 
**instruction** | **String** |  The pickup instruction.  eg: Handle with care.  | [optional] 
**package_location** | **String** |  The package(s) location.  eg: Behind the entrance door.  | [optional] 
**options** | **Object** | Advanced carrier specific pickup options | [optional] 


