(function() {
  var ctrls = angular.module('allalong_controllers', []);

  ctrls.controller('mainController', mainController);

  function mainController() {
    var self = this;

    self.locales = ['en', 'fr'];
    self.locale = localStorage.getItem('allalong_locale') || 'fr';
    self.labels = {
      home: {
        en: 'home',
        fr: 'accueil'
      },
      recruitment: {
        en: 'recruitment',
        fr: 'recrutement'
      },
      dashboard: {
        en: 'dashboard',
        fr: 'tableau de bord'
      },
      events: {
        en: 'events',
        fr: 'événements'
      },
      sentryAsMenu: {
        en: 'sentry AS',
        fr: 'AS des tourelles'
      },
      sentryAsTitle: {
        en: 'sentry effective attack speed calculation',
        fr: 'calcul de la vitesse d\'attaque des tourelles'
      },
      currentAs: {
        en: 'current attack speed',
        fr: 'vitesse d\'attaque actuelle'
      },
      taskerBonus: {
        en: 'Tasker and Theo pets bonus',
        fr: 'Bonus aux familiers des Tasker et Theo'
      },
      calculate: {
        en: 'calculate',
        fr: 'calculer'
      },
      sentryResult: {
        en: 'current sentry attack speed',
        fr: 'vitesse d\'attaque des tourelles'
      }
    };
  }

  ctrls.controller('homeController', homeController);

  function homeController() {
    var self = this;
  }

  ctrls.controller('sentryAsController', sentryAsController);

  function sentryAsController() {
    var self = this;

    self.currentAS = 0;
    self.taskerBonus = 40;
    self.result = 0;

    self.calcul = function() {
      self.result = self.currentAS * (1 + (self.taskerBonus / 100));
      if (self.result >= 0 && self.result < 1.10205) {
        self.result = 1.1;
      } else if (self.result >= 1.10205 && self.result < 1.2558) {
        self.result = 1.25;
      } else if (self.result >= 1.2558 && self.result < 1.45946) {
        self.result = 1.42857;
      } else if (self.result >= 1.45946 && self.result < 1.74194) {
        self.result = 1.66666;
      } else if (self.result >= 1.74194 && self.result < 2.16001) {
        self.result = 2;
      } else if (self.result >= 2.16001 && self.result < 2.84211) {
        self.result = 2.5;
      } else if (self.result >= 2.84211 && self.result < 4.15386) {
        self.result = 3.33333;
      } else if (self.result >= 4.15386) {
        self.result = 5;
      }
    };

  }
})();
