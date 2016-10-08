/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dofus-workbench',
    environment: environment,
    baseURL: '/dofus-workbench/',
    locationType: 'auto',
    dofusDataRepository: 'https://raw.githubusercontent.com/pboutin/dofus-data/v2.36/',
    firebase: {
      apiKey: 'AIzaSyCAQrDi71G26EmKBoKy1RSxfC8XxreRKqw',
      authDomain: 'dofus-workbench.firebaseapp.com',
      databaseURL: 'https://dofus-workbench.firebaseio.com',
      storageBucket: 'dofus-workbench.appspot.com',
    },
    torii: {
      sessionServiceName: 'session'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        Date: false,
      }
    },
    i18n: {
      defaultLocale: 'fr'
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
