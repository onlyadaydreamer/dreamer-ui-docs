import Vue from 'vue';
import Element from 'element-ui'; // 引入elementUi
import 'element-ui/lib/theme-chalk/index.css'

import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' //样式文件

import dreamerUI from 'dreamer-ui' // 要编写对应的文档的包 
// 在dreamer-ui项目下执行npm link， 把个项目链接链接到全局/usr/local/lib/node_modules/dreamer-ui
// 然后在本项目中执行npm link dreamer-ui就把dreamer-ui这个项目引过来了 /Users/zhangxing/Desktop/个人项目/dramer-ui-doc/node_modules/dreamer-ui -> /usr/local/lib/node_modules/dreamer-ui -> /Users/zhangxing/Desktop/个人项目/dreamer-ui
// 这样的话就不需要先发布到npm上了
import 'dreamer-ui/dist/dreamer-ui.css' 
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})
export default ({
  Vue,
  options, 
  router,
  siteData
}) => {
  Vue.use(Element);
  Vue.use(dreamerUI)
}