const headerApp = singleSpaAngularjs.default({
  angular: angular,
  domElementGetter: () => document.getElementById('header'),
  mainAngularModule: 'app.header',
  //uiRouter: 'header'
  template: `
  <h1>Header</h1>
  <hr>
  <app-nav></app-nav>
  <hr>
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
  name: 'app1',
  app: () => System.import("http://localhost:9000/bundle.js"),
  activeWhen: (location) => location.hash.startsWith('#/one')
});

singleSpa.registerApplication({
  name: 'app2',
  app: () => System.import("http://localhost:9001/bundle.js"),
  activeWhen: (location) => location.hash.startsWith('#/two')
});

singleSpa.registerApplication({
  name: 'footerApp',
  app: footerApp,
  activeWhen: () => true
});

singleSpa.start();