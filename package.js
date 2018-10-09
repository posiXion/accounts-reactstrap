Package.describe({
  summary: 'Reactstrap UI Components for accounts-React',
  version: '0.5.1',
  name: 'arichter:accounts-reactstrap',
  git: 'https://github.com/understandr/accounts-reactstrap.git',
  documentation: 'README.md'
});

Package.onUse((api) => {
  api.versionsFrom('1.6.1');

  api.use('ecmascript');
  api.mainModule('index.js', 'client');
});

/*
Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('arichter:accounts-reactstrap');
  api.mainModule('accounts-reactstrap-tests.js');
});
*/