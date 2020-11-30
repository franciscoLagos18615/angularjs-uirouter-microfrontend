(function(){
  angular.module("app.main")
    .service("Service", Service);

  function Service() {
    this.value = void 0;
    this.counter = 0;
  }
})();
