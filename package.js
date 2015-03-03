Package.describe({
  summary: "Live update the changes in browser without full page reload",
  version: "0.1.1",
  name: "nucleuside:live-update",
  git: 'https://github.com/nucleuside/meteor-live-update.git'
});

Npm.depends({
  'recursive-readdir': '1.2.1'
});

Package.on_use(function (api, where) {
  api.versionsFrom("METEOR@0.9.1");

  api.use(['reload',
    'jquery',
    'ui',
    'spacebars-compiler',
    'autoupdate',
    'underscore',
    'deps',
    'reactive-var',
    'nucleuside:transcompiler@0.0.1'
  ]);

  api.add_files([
    'js/utils.js'
  ]);

  api.add_files([
    'js/eval.js',
    'js/css-update.js',
    'js/live-update.js'
  ], ['client']);

  api.addFiles([
    'js/collect_css_from_server.js',
  ], ['server']);

  api.export && api.export(['LiveUpdate'], ['client']);
});
