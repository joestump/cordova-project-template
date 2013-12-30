require.config({

  deps: ['main'],

  paths: {
    bootstrap: '../bower_components/bootstrap/dist/bootstrap',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/lodash/lodash',
    jquery: '../bower_components/jquery/jquery',
    moment: '../bower_components/moment/moment',
    tpl: '../bower_components/lodash-template-loader/loader',
    i18n: '../bower_components/requirejs-i18n/i18n',
    text: '../bower_components/requirejs-text/text',
  },

  shim: {
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    }
  }

});
