{
  
  // The type of resource
  "resourceType" : "Observation",
  
  // The status of the observation
  "status": "final",
  
  // Time of the observation
  "effectiveDateTime": "YYYY-MM-DDThh:mm:ss+zz:zz",
    
  // Time result issued
  "issued": "YYYY-MM-DDThh:mm:ss.sss+zz:zz",
  
  // Patient associated with the observation
  "subject": {
    "reference": "Patient/3294843"
  },
  
  // Clinical episode associated with the observation
  "encounter": {
    "reference": "Encounter/2314234"
  },
  
  // LOINC code for the observation that was made
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "718-7",
        "display": "Hemoglobin [Mass/volume] in Blood"
      }
    ],
    "text": "Hemoglobin"
  },
  
  // SNOMED code for the body site used 
  "bodySite": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "122555007",
        "display": "Venous blood specimen (specimen)"
      }
    ]
  },
  
  // Value and units of measure
  "valueQuantity": {
    "value": 96,
    "unit": "g/L",
    "system": "http://unitsofmeasure.org",
    "code": "m-3.g"
  }
}