(function(){
  angular.module("app.header")
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', 'useUiRouter'];
  function config($stateProvider, $urlRouterProvider, useUiRouter) {
    if (!useUiRouter) {
      return;
    }
    $urlRouterProvider.otherwise('/one/main');

    $stateProvider.state('root', {
      abstract: true,
      views: {
        "header@": {
          templateUrl: 'header/app.tpl.html'
        }
      }
    })
    .state('app1', {
      parent: 'root',
      abstract: true,
      url: '/one'
    })
    .state('app1.main', {
      url: '/main',
      label: 'App 1 - main'
    })
    .state('app1.other', {
      url: '/other',
      label: 'App 1 - other'
    })
    .state('app2', {
      parent: 'root',
      abstract: true,
      url: '/two'
    })
    .state('app2.main', {
      url: '/main',
      label: 'App 2 - main'
    })
    .state('app2.other', {
      url: '/other',
      label: 'App 2 - other'
    });
  }
})();