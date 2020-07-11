The CODA-19 application server will be responsible for serving web-facing applications, such as the CODA-19 dashboard. Applications deployed on this server will implement 2-factor authentication, as described in section 3, and be served over SSL/TLS, as described in section 6. 

In addition to these measures, CODA-19 applications will be subject to review by the data security committee in order to ensure that they follow best practice guidelines for secure coding practices. This includes, but is not limited to, the following:

* Ensuring that appropriate validation of all user-supplied inputs is performed
* Ensuring that session management is performed using strong random tokens
* Ensuring that logout functionality fully terminates the associated session or connection
* Ensuring that server-side components segregate privileged logic from other code
* Ensuring that error handling does not disclose sensitive information
* Ensuring that the SSL/TLS keys are stored in a secure location