import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import VueRouter from 'vue-router';
import actions from '@/actions'
Vue.config.productionTip = false


//以下都是重点

let router = null;
let instance = null;


  //下面的 /star  与主应用  registerMicroApps 中的  activeRule 字段对应
function render(props = {}) {
  const { container } = props;
  if (props) {
    // 注入 actions 实例
    actions.setActions(props);
  }
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/micro-app-vue' : '/',
    mode: 'history',
    routes,
  });

  Vue.prototype.$actions = actions;

  instance = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}


export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
 //props 包含主应用传递的参数  也包括为子应用 创建的节点信息
  console.log(props)
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance = null;
  router = null;
}