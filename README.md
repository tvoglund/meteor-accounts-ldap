## Accounts LDAP

Authentication for meteor using LDAP.  Please see https://atmospherejs.com/babrahams/accounts-ldap for documentation.  I slightly changed this code to get working with a test server at http://www.forumsys.com/tutorials/integration-how-to/ldap/online-ldap-test-server/

## Details

Please see link above for most details, the few items this package has changed is described below.

#### sample settings.json file

"ldap": {
  "autoCreateUser": false,
  "tryDBFirst": false,
  "searchDn": "uid",
  "serverDn": "DC=example,DC=com",
  "serverUrl": "ldap://ldap.forumsys.com:389",
  "whiteListedFields": [ "displayName", "givenName", "department", "employeeNumber", "mail", "title", "address", "phone", "memberOf"],
  "autopublishFields": [ "displayName", "department", "mail", "title", "address", "phone"]
}

#### Ldap login
if the user passes in username of jdoe, then the following will be used to search our LDAP bind.

uid=jdoe,dc=example,dc=com

###### note:  
cd=example,dc=com is from the serverDn of the settings.json file
