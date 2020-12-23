let angular = window.angular;

function load (r) {
  r.keys().forEach(r);
}

load(require.context('./src/', true, /\.module\.js$/));
load(require.context('./src/', true, /(?<!\.module)\.js$/));

const app2 = singleSpaAngularjs.default({
  angular: angular,
  domElementGetter: () => document.getElementById('main'),
  mainAngularModule: 'app2.main',
  preserveGlobal: true,
  template: `
    <!-- MAIN -->
    <div ui-view="main" autoscroll="true"></div>
  `
});

export const { mount, unmount, bootstrap } = app2;