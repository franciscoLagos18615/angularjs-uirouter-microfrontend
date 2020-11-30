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

  function navCtrl($state) {
    this.states = [
      { sref: "main", label: "Main State" },
      { sref: "other", label: "Other State" }
    ];

    this.is = function (state) {
      return $state.is(state.sref);
    }
  }
})();