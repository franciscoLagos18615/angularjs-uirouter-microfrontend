const headerApp = singleSpaAngularjs.default({
  angular: angular,
  domElementGetter: () => document.getElementById('header'),
  mainAngularModule: 'app.header',
  uiRouter: 'header'
});

const mainAngularJsApp = singleSpaAngularjs.default({
  angular: angular,
  domElementGetter: () => document.getElementById('main'),
  mainAngularModule: 'app.main',
  template: `
    <!-- MAIN -->
    <div ui-view="main" autoscroll="true"></div>
  `
});

const footerApp = singleSpaAngularjs.default({
  angular: angular,
  domElementGetter: () => document.getElementById('footer'),
  mainAngularModule: 'app.footer',
  uiRouter: false,
  template: '<app-footer></app-footer>'
});

singleSpa.registerApplication({
  name: 'headerApp',
  app: headerApp,
  activeWhen: () => true
});

singleSpa.registerApplication({
  name: 'mainAngularJsApp',
  app: mainAngularJsApp,
  activeWhen: () => true
});

singleSpa.registerApplication({
  name: 'footerApp',
  app: footerApp,
  activeWhen: () => true
});

singleSpa.start();