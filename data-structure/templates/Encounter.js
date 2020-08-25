{
  
  // The type of resource
  "resourceType" : "Encounter",
  
  // Identifier. No special coding system.
  "id": "some-encounter-id",
    
  // The status of the encounter
  "status": "in-progress",
  
  // The type of the encounter
  "class": {
    "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    "code": "IMP",
    "display": "inpatient encounter"
  },
  
  "subject": {
    "reference": "Patient/24235135"
  },
  
  "period": {
    "start": "YYYY-MM-DDThh:mm:ss+zz:zz",
    "end": "YYYY-MM-DDThh:mm:ss+zz:zz"
  }
}