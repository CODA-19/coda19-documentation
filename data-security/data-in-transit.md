# Protection of data in transit

"Data in transit" refers to any information exiting a component of the CODA-19 network over a network interface. Such exchanges may occur either:

* Between multiple CODA-19 computation nodes, e.g. when a federated learning query is performed, and a trained machine learning model is passed between nodes.
* Between a computation node in the CODA-19 network and an authorized device in the local area network of one of the participating sites, e.g. when an authorized researcher programmatically submits an API query to the local CODA-19 computation node.
* Between the application server and the CODA-19 network, e.g. when an authorized researcher performs a distributed analysis via the CODA-19 dashboard.
* Between the application server and an authorized device in the local area network of one of the participating sites, e.g. when an authorized researcher consults the CODA-19 dashboard from their personal workstation at one of the participating sites.

All data in transit will be protected using Secure Sockets Layer/Transport Layers Security (SSL/TLS), with 4096-bit RSA keys. Standard SSL/TLS will be used for applications deployed over a web interface (scenario 4), which only display a highly restricted subset of aggregate statistics. Two-way SSL/TLS, aslo known as "TLS with client certificate authentication," will be used for all other situations of data in transit (scenarios 1-3).

Two-way SSL/TLS involves the use of both a client certificate and a server certificate, such that the server can restrict which clients are allowed to communicate with it. By contrast with a symmetric shared secret key, this provides mutual authentication: the API server must authenticate itself to the API client, and the API client must authenticate itself to the API server. 

Each CODA-19 computation node and each user account will be associated with a unique X.509 SSL/TLS certificate. Users will be able to download their SSL/TLS certificate via the account section of the dashboard. 
