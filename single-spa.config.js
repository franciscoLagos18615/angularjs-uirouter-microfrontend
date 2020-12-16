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

const app1 = singleSpaAngularjs.default({
  angular: angular,
  domElementGetter: () => document.getElementById('main'),
  mainAngularModule: 'app1.main',
  template: `
    <!-- MAIN -->
    <div ui-view="main" autoscroll="true"></div>
  `
});

const app2 = singleSpaAngularjs.default({
  angular: angular,
  domElementGetter: () => document.getElementById('main'),
  mainAngularModule: 'app2.main',
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
  name: 'app1',
  app: {
    bootstrap: app1.bootstrap,
    mount: app1.mount,
    unmount: app1.unmount
  },
  activeWhen: (location) => location.hash.startsWith('#/one')
});

singleSpa.registerApplication({
  name: 'app2',
  app: app2,
  activeWhen: (location) => location.hash.startsWith('#/two')
});

singleSpa.registerApplication({
  name: 'footerApp',
  app: footerApp,
  activeWhen: () => true
});

singleSpa.start();