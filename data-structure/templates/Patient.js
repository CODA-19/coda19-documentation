{
  
  // The type of resource
  "resourceType" : "Patient",
  
  // An identifier for this patient
  "identifier" : [{
    // Indicate that this ID is a medical record number
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
          "code": "MR"
        }
      ]
    },
    
    // The medical record number ID
    "value" : "453265624",
    
    // The organisation assigning the ID
    "assigner" : {
      "reference" : "CHUM",
      "type" : "Organization"
    }
  }],
  
  // The patient's name
  "name" : [
    {
      "text" : "Boris Macdonald", // Full name
      "family" : "Macdonald", // Surname
      "given" : ["Boris"] // First name
    }  
  ], 
  
  // The gender of the individual 
  "gender" : { 
    "code" : "male" // male | female | other | unknown
  }, 
  
  // The date of birth of the individual
  "birthDate" : "YYYY-MM-DD", 
  
  // Indicates if the individual is deceased or not.
  "deceasedBoolean" : true,
  
  // Indicates the time of death, if applicable.
  "deceasedDateTime" : "YYYY-MM-DDThh:mm:ss+zz:zz"

}