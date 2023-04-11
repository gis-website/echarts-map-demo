/*
 * @Author: TQtong 2733707740@qq.com
 * @Date: 2023-04-11 09:48:16
 * @LastEditors: TQtong 2733707740@qq.com
 * @LastEditTime: 2023-04-11 09:50:27
 * @FilePath: \echarts-map-demo\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/EchartsMap.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
