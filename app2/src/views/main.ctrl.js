(function(){
  angular.module("app2.main")
    .controller("MainController", MainController);

  function MainController() {
    var vm = this;
    vm.msg = 'Hello app2';
  }
})();