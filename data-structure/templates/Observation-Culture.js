{

  // The type of resource
  "resourceType": "Observation",

  // Each resource entry needs a unique id for the ndjson bulk upload. 
  "id": "f002",

  // The status of the observation
  "status": "resulted",

  // Time of the observation
  "effectiveDateTime": "YYYY-MM-DDThh:mm:ss+zz:zz",

  // Time result issued
  "issued": "YYYY-MM-DDThh:mm:ss.sss+zz:zz",

  // Patient associated with the observation
  "subject": {
    "reference": "Patient/3294843"
  },

  // Clinical episode associated with the observation (if possible)
  "encounter": {
    "reference": "Encounter/2314234"
  },

  // LOINC code for the observation that was made (LOINC "code" field to be omitted until coding/categorization completed)
  "code": {
    "coding": [{
      "system": "http://loinc.org",
      "code": "600-7",
      "display": "Bacteria identified in Blood by Culture"
    }],
    "text": "Bacterial Culture - Blood"
  },

  // SNOMED code for the method used (SNOMED "code" field to be omitted until coding/categorization completed) 
  "method": {
    "coding": [{
      "system": "http://snomed.info/sct",
      "code": "104177005",
      "display": "Blood culture for bacteria, including anaerobic screen"
    }]
  },

  "interpretation": [{
    "coding": [{
      "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
      "code": "POS"
    }]
  }]
}