# CODA-19 authorization flow
![Auth flow](auth-flow.png)

## Keycloak

**List of clients**
```
dashboard <VALERIA base url>/dashboard
sites-chum <SITE base IP>/api
sites-chuq <SITE base IP>/api
```

## Auth Flow

**1. Le dashboard user s'authentifie avec Keycloak-JS:**

```js
const keycloak = new Keycloak({
  url: '<VALERIA base url>/dashboard/auth',
  realm: 'coda19',
  scope: 'openid'
  clientId: 'dashboard',
  realmPublicKey: 'MIIBIjANB...'
})

keycloak.init().then(function(authenticated) {
  alert(authenticated ? 'authenticated' : 'not authenticated');
}).catch(function() {
  alert('failed to initialize');
})
```

2. Le client peut faire des requêtes autorisées:

```js
const loadData = function () {

  const url = 'http://localhost:8080/restful-service'

  const req = new XMLHttpRequest()
  req.open('GET', url, true)
  req.setRequestHeader('Accept', 'application/json')
  // Set the JWT as the header
  req.setRequestHeader('Authorization', 'Bearer ' + keycloak.token)

  req.onreadystatechange = function () {
    if (req.readyState == 4) {
      if (req.status == 200) {
        alert('Success')
      } else if (req.status == 403) {
        alert('Forbidden')
      }
    }
  }

  req.send()
}
```

3. Le hub API s'authentifie aux sites avec Keycloak-NodeJS au moment d'établir la connection WebSocket. 

```shell
npm install keycloak-connect --save
npm install express-session --save
```

```js
let kcConfig = {
  clientId: 'sites-chum',
  bearerOnly: true,
  serverUrl: '<CHUM base IP>/api/auth',
  scope: 'openid'
  realm: 'coda19',
  username: 'hub',
  password: 'hub'
}

const session = require('express-session')
const Keycloak = require('keycloak-connect')

let _keycloak

function initKeycloak() {
  if (_keycloak) {
    console.warn("Trying to init Keycloak again!")
    return _keycloak;
  }  else {
    console.log("Initializing Keycloak...")
    let memoryStore = new session.MemoryStore()
    _keycloak = new Keycloak({ store: memoryStore }, kcConfig)
    return _keycloak
  }
}

function getKeycloak() {
  if (!_keycloak){
    console.error('Keycloak has not been initialized. Please called init first.');
  } 
  return _keycloak;
}

module.exports = {
  initKeycloak,
  getKeycloak
}
```

**4. Un utilisateur envoie une demande au hub API via un POST sur le backend du dashboard:** 

```js
// Include JWT token for authentication of user to dashboard client in header (keycloak.token)
Authorization: Bearer xxxxx.yyyyy.zzzzz
{

  "data": {
    "action": "summarize",
    // Represented in GraphQL
    "filter": `{
      subject {
         reference
            resource(type : Patient) { age, sex, deceased }
      }
    }`,
    "options": { "limit": 100, "ops": ["mean", "median", "max"] }
  }

}
```

**5. Le hub forward la demande à tous les sites concernés via un message WebSocket JSON:**

```js
{
  
  "type": "message",
  "description": "This message gets a summary of patient ages.",

  "destination": {
    "site": "110",
    "service": "stats"
  },

  "authorization": "xxxxx.yyyyy.zzzzz",

  "data": {
    "action": "summarize",
    "filter": `{
      subject {
         reference
            resource(type : Patient) { age, sex, deceased }
      }
    }`,
    "options": { "limit": 100, "ops": ["mean", "median", "max"] }
  }

}
```

**6. Les sites retournent la réponse via le WebSocket:**

```json
{

  "type": "response",
  "description": "This is a response with the patient ages.",
  "destination": {
    "site": "000",
    "service": "stats"
  },

  "data": {
    "num_records": 23,
    "variables": [
      { "name": "age", "mean": 73, "median": 56, "max": 100 }
    ]
}
```

**Autre example: message pour le machine learning service:**

```js

 {
  
  "type": "message",
  "description": "This message prepares a machine learning model."
  
  "destination": {
    "site": "110",
    "service": "learning"
  },
  
  "authorization": "xxxxx.yyyyy.zzzzz",
  
  "data": {
    "action": "prepare", 
      
    "filter": `{
      subject {
         reference
            resource(type : Patient) { age, sex, deceased }
      }
    }`,
      
    "options": {
      "model": "keras model json here",
      "hyperparameters": {
        "num_predictors": 2,
        "num_outcomes": 1,
        "learning_rate": 0.001,
        "validation_split": 0.33,
        "epochs": 150,
        "batch_size": 10,
        "shuffle": 1
      }
    }
  }
  
}
```
