(function(){
  angular.module("app1.main")
    .controller("OtherController", OtherController);

  function OtherController($scope, Service) {
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