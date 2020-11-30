(function(){
  angular.module("app.main")
    .controller("MainController", MainController);

  function MainController($scope, Service) {
    var vm = this;
    vm.serv = Service;
    
    $scope.$watch(function(){
      return Service.value;
    }, function(newVal, oldVal){
      if(newVal !== oldVal){
        Service.counter++;
      }
    });
  }
})();