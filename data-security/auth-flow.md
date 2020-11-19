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
4. Chaque message WebSocket contient le JWT
