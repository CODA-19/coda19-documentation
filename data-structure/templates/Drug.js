{
  
  // The type of resource
  "resourceType" : "MedicationAdministration",
  
  // Each resource entry needs a unique id for the ndjson bulk upload. 
  "id": "f002",
  
  "subject": {
				"reference": "Patient/pat1",
             },
  
  "contained": [
                    {
                      "resourceType": "Medication",
                      "id": "med0301",
                      "code": {
                        "coding": [
                          {
                            "system": "http://hl7.org/fhir/sid/ndc",
							// codes to be associated with labels later.
                            "code": "0069-2587-10",
                            "display": 
                          }
                        ]
                      }
                    }
				], 
				
				
				
  "effectivePeriod": {
	    "start": "YYYY-MM-DDThh:mm:ss+zz:zz"
		"end": "YYYY-MM-DDThh:mm:ss+zz:zz"
	  },
	  
  "dosage": {
               "text": "4.5 grams in D5W 250 ml. IV every 6 hours. Infuse over 30 min at 8L/min",
               "route": {
                      "coding": [
                        {
                          "system": "http://snomed.info/sct",
                          "code": "47625008",
                          "display": "Intravenous route (qualifier value)"
                        }
                      ]
              },
  
		