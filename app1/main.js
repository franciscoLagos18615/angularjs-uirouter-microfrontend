let angular = window.angular;

function load (r) {
  r.keys().forEach(r);
}

load(require.context('./src/', true, /\.module\.js$/));
load(require.context('./src/', true, /(?<!\.module)\.js$/));

const app1 = singleSpaAngularjs.default({
  angular: angular,
  domElementGetter: () => document.getElementById('main'),
  mainAngularModule: 'app1.main',
  preserveGlobal: true,
  template: `
    <!-- MAIN -->
    <div ui-view="main" autoscroll="true"></div>
  `
});

export const { mount, unmount, bootstrap } = app1;