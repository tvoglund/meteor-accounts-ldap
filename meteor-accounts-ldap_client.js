var _username = "";
var _data = {};

LDAP = {
  data : function () { return _data; },
  username : function () { return _username; }
};

Meteor.loginWithLdap = function (username, password, callback) {
  var methodArguments = {username: username, pwd: password, ldap: true, data: {'data': null, 'username': username}};
  Accounts.callLoginMethod({
    methodArguments: [methodArguments],
    validateResult: function (result) {
      _data = result;
    },
    userCallback: callback
  });
};