(function(){
  angular.module("app.header")
    .config(config);

  function config($stateProvider, $urlRouterProvider) {

    $stateProvider.state('root', {
      abstract: true,
      views: {
        "header@": {
          templateUrl: 'header/app.tpl.html'
        }
      }
    }).state('main', {
      parent: 'root',
      url: '/main'
    }).state('other', {
      parent: 'root',
      url: '/other'
    })
  }
})();