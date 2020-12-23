(function(){
  angular.module("app1.main")
    .controller("MainController", MainController);
  MainController.$inject = ['$scope', 'Service'];
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