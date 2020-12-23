(function(){
  angular.module('app.footer')
    .directive("appFooter", appFooterDirective);

  function appFooterDirective() {
    return {
      restrict: 'E',
      controller: footerCtrl,
      controllerAs: 'footer',
      templateUrl: 'footer/app.tpl.html'
    };
  }

  function footerCtrl() {
    this.year = new Date().getFullYear();
  }
})();