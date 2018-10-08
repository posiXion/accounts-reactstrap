Package.describe({
  summary: 'Reactstrap UI Components for accounts-React',
  version: '0.5.1',
  name: 'meteoreact:accounts-reactstrap',
  git: 'https://github.com/understandr/accounts-reactstrap.git',
  documentation: null,
});

Package.onUse((api) => {
  api.versionsFrom('1.6.1');

  api.use('ecmascript');
  api.mainModule('index.js', 'client');
});
