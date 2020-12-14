(function(){
  const useUiRouter = false;

  angular.module("app.header", ['ui.router'])
    .constant('useUiRouter', useUiRouter);
})();
