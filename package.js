Package.describe({
  name : 'tvoglund:meteor-accounts-ldap',
  summary: 'Meteor account login via LDAP',
  version: '0.0.19',
  git : 'https://github.com/tvoglund/meteor-accounts-ldap',
  documentation: 'README.md'
});

Npm.depends({'ldapjs' : '0.7.1', 'connect' : '2.19.3'});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.1.0.2');
  api.use(['routepolicy', 'webapp'], 'server');
  api.use(['accounts-base', 'underscore'], ['client', 'server']);
  api.use('accounts-password', 'server');
  api.imply('accounts-base', ['client', 'server']);
  api.add_files(['meteor-accounts-ldap_client.js'], 'client');
  api.add_files('meteor-accounts-ldap_server.js', 'server');
  api.export('LDAP');
});
