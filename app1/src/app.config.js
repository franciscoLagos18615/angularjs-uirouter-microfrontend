(function () {
  angular.module("app1.main")
    .config(config);
  config.$inject = ['$stateProvider', '$urlRouterProvider'];
  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/one/main');

    $stateProvider.state('root', {
      abstract: true,
      views: {
        "main@": {}
      }
    })
    .state('app1', {
      parent: 'root',
      abstract: true,
      url: '/one'
    })
    .state('app1.main', {
      url: '/main',
      views: {
        "main@": {
          controller: 'MainController',
          controllerAs: 'ctrl',
          templateUrl: 'app1/src/views/main.tpl.html'
        }
      }
    })
    .state('app1.other', {
      url: '/other',
      views: {
        "main@": {
          controller: 'OtherController',
          controllerAs: 'ctrl',
          templateUrl: 'app1/src/views/other.tpl.html'
        }
      }
    });
  }
})();
