# Data de-identification

The CODA-19 project is committed to applying the highest standards for the protection of the patient's privacy and confidentiality. **No personally identifying information shall, under any circumstance, be made available on any component of the CODA-19 network.** This section describes the data de-identification policies that will be enforced in order to ensure that confidential information is handled with the utmost rigor.

## De-identification of tabular data

All personally identifying information (e.g. patient identifiers, address of residence, date of birth) will be removed during data extraction, prior to storage of the standardized data format on the CODA-19 storage node. Elements of a unique type (e.g. a specific laboratory test) with a count less than 5 in the overall output will be censored..

## De-identification of DICOM data

Pixel data and DICOM headers will be extracted from DICOM imaging studies (e.g. X-rays and CT scans) prior to storage for analysis. Only a whitelisted subset of technical, non-identifying DICOM headers will be kept in the database. 

## De-identification of textual data

Textual data (such as imaging reports, free text clinical observations or nursing notes) is not currently included in the CODA-19 standard format. If such data is included at a later date, a formal process will be agreed upon to identify the optimal de-identification strategy, and the data security policy will be amended accordingly.

## Site responsibilities and auditing

De-identification of data will be under the ultimate responsibility of the site lead data scientist, who will seek assistance from the data security committee in the event of any questions. In addition, each site will nominate a privacy auditor, who will receive a summary report of each "build" of the site's CODA-19 database. This summary report will contain descriptive statistics for each table and column, and implement automated rules to flag potentially problematic information. The privacy auditor will review each summary report in order to identify any potential anomalies in the data de-identification process. 