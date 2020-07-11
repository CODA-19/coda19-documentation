# Access control

Access control encompasses both authentication (ensuring that only legitimate users are able to access the system) and authorization (ensuring that legitimate users are only able to access the data that they are authorized to view). CODA-19 implements the principle of "least privilege," which restricts users to only the functionality, data and system information that is required to perform their tasks. In order to accomplish this, a central authentication and authorization server will be deployed. 

## Authentication system

The authentication component will be responsible for:

* Keeping an up-to-date list of user accounts who will be authorized to access certain CODA-19 applications and other system components;
* Managing creation, update and revocation of authentication credentials associated with the aforementioned users;
* Recording a timestamped log of successful and unsuccessful authentication attempts, and notifying the system administrator of any suspicious login attempts.

End-users will be authenticated via the use of the following combination of credentials:

* An institutional e-mail, associated with a whitelisted e-mail domain or sub-domain at one of the participating institutions (e.g. @chum.ssss.gouv.qc.ca).
* An account password, which will be supplied by the user at the time of account creation. Standard rules for the creation of secure passwords will be enforced. 
* A 2-factor authentication code, which will be sent to the user's phone via Short Message Service (SMS) at the time of authentication.

The creation of user passwords will be according to the NIST digital identity guidelines:

* Minimum of 8 characters and maximum of 128 characters
* Ability to use all special characters, but no special requirement to use them
* Restriction of context-specific passwords (e.g. name of the site)
* Restriction of commonly used passwords and dictionary words
* Restriction of passwords from previously breached corpuses

## Authorization system

A central authorization system will be implemented to limit what operations users can perform in the CODA-19 network. This system will be responsible for:

* Defining access roles, and the permissions associated with each role;
* Granting or revoking one or more roles to a user account; 
* Recording a timestamped log of queries performed by each user account.

Note that the central authorization system does not govern access control outside of the CODA-19 network (e.g. existing servers and storage infrastructures at participating sites). Access control to these components is under the local responsibility of each site.

The following types of roles will be implemented:

* Administrator roles: administrator roles enable the bearer to grant and revoke other roles. This includes the site administrator role, which enables the bearer to grant user roles for a specific participating site, and the master administrator role, which enables the bearer to grant site administrator roles.
* User roles: user roles identify of a set of access permissions to which the user with the role is entitled. A full list of user roles is provided in Table 1. 

The following access permissions will be implemented:

* Site dashboard access permissions: gives access to the CODA-19 dashboard application, providing a high-level overview of the project's key statistics, but does not enable the user to perform API queries.
* Site basic API access permissions: the user with the site basic API access role will be entitled to perform a restricted, pre-defined set of custom queries to obtain summary statistics on the patient population in the site's data repository (e.g. mean, median, standard deviation at single time points and over time). This list of queries is reported in Appendix XX. This appendix needs to be approved by the executive committee and will be updated overtime.
* Site advanced API access permissions: the user with the site advanced access role will be entitled to perform distributed and federated analyses running in a containerized application on the site's CODA-19 computation node.


Note that one user may have multiple roles, including both an administrator and a user role, and that roles are defined on a per-site basis. For example, a "site lead data scientist" may wish to perform distributed analyses across 3 additional sites. This user already has API access permissions, but is not authorized to query the CODA-19 computation nodes in the other sites. Upon project approval by the governance committee and ethics board, each of the "site administrators" at the 3 additional sites will grant the "site researcher" role to this user. This will enable the user to perform distributed analyses involving these sites. 
