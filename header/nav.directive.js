(function(){
  angular.module("app.header")
    .directive("appNav", appNavDirective);

  function appNavDirective() {
    return {
      restrict: 'E',
      controller: navCtrl,
      controllerAs: 'nav',
      templateUrl: 'header/nav.tpl.html'
    };
  }
  navCtrl.$inject = ['$state', 'useUiRouter'];
  function navCtrl($state, useUiRouter) {
    this.useUiRouter = useUiRouter;

    if (useUiRouter) {
      this.states = $state.get()
        .filter(s => !s.abstract)
        .map(s => {
          return { sref: s.name, label: s.label };
        });
    } else {
      this.states = [
        { sref: '#/one/main', label: 'App 1 - main'},
        { sref: '#/one/other', label: 'App 1 - other'},
        { sref: '#/two/main', label: 'App 2 - main'},
        { sref: '#/two/other', label: 'App 2 - other'},
      ];
    }
    
    this.is = function (state) {
      if (useUiRouter) {
        return $state.is(state.sref);
      } else {
        return location.hash.includes(state.sref);
      }
    }
  }
})();