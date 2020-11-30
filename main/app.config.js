(function () {
  angular.module("app.main")
    .config(config);

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('root', {
      abstract: true,
      views: {
        "main@": {}
      }
    }).state('main', {
      parent: 'root',
      url: '/main',
      views: {
        "main@": {
          controller: 'MainController',
          controllerAs: 'ctrl',
          templateUrl: 'main/views/main.tpl.html'
        }
      },
      data: { pageTitle: 'Main' }
    }).state('other', {
      parent: 'root',
      url: '/other',
      views: {
        "main@": {
          controller: 'OtherController',
          controllerAs: 'ctrl',
          templateUrl: 'main/views/other.tpl.html'
        }
      },
      data: { pageTitle: 'Other' }
    });
  }
})();
