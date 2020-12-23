(function () {
  angular.module("app2.main")
    .config(config);
  config.$inject = ['$stateProvider', '$urlRouterProvider'];
  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/two/main');

    $stateProvider.state('root', {
      abstract: true,
      views: {
        "main@": {}
      }
    })
    .state('app2', {
      parent: 'root',
      abstract: true,
      url: '/two'
    })
    .state('app2.main', {
      url: '/main',
      views: {
        "main@": {
          controller: 'MainController',
          controllerAs: 'ctrl',
          templateUrl: 'app2/src/views/main.tpl.html'
        }
      }
    })
    .state('app2.other', {
      url: '/other',
      views: {
        "main@": {
          controller: 'OtherController',
          controllerAs: 'ctrl',
          templateUrl: 'app2/src/views/other.tpl.html'
        }
      }
    });
  }
})();
