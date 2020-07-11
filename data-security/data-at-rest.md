# Protection of data at rest

"Data at rest" refers to information that is stored in a permanent or semi-permanent fashion on any component of the CODA-19 network. The protection of data at rest in the context of the CODA-19 project is based on the following principles:

* Data isolation: CODA-19 storage nodes, inside which de-identified data will be stored, will be implemented as virtual machines that are used solely for the purpose of data storage and retrieval. 
* Access limitation: only a restricted subset of users is allowed to access environments where data at rest is present, and only a restricted set of interfaces is enabled for access. Specifically, CODA-19 storage nodes may only be accessed via a local area network interface. 
* Server hardening: CODA-19 storage nodes will run AppArmor, a Linux application security system that protects the operating system and applications by providing mandatory access control.
* Data preservation: data collected as part of the CODA-19 will be preserved for 10 years, unless otherwise specified by an ERB-approved study protocol.