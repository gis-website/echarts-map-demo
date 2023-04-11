<!--
 * @Author: TQtong 2733707740@qq.com
 * @Date: 2023-04-11 09:18:53
 * @LastEditors: TQtong 2733707740@qq.com
 * @LastEditTime: 2023-04-11 19:08:39
 * @FilePath: \echarts-map-demo\src\components\EchartsMap.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div ref="myChartMap" id="myChartMap"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import { getJsonDataApi } from '@/api/api'
require('echarts-gl')

let geojson = [] as any
const myChartMap = ref()

onMounted(async () => {
  const res = await getJsonDataApi()
  geojson = res

  echarts.registerMap('nanjing', geojson)
  const myEchart = echarts.init(myChartMap.value)
  const option = {
    geo3D: [
      {
        map: 'nanjing',
        roam: false, // 是否开启鼠标缩放和平移漫游
        itemStyle: {
          // areaColor: 'rgba(0,0,0,1)',
          // shadowColor: '#000',
          // shadowOffsetX: 100,
          // shadowOffsetY: 25,
          // opacity: 1,
          // borderWidth: 1,
          // borderColor: '#00ffff'
          opacity: 1,
          borderWidth: 3,
          borderColor: '#fff'
        },
        viewControl: {
          projection: 'perspective',
          distance: 100, // 地图视角 控制初始大小
          rotateSensitivity: 0, // 旋转
          zoomSensitivity: 0, // 缩放
          alpha: 30, // 视角绕 x 轴，即上下旋转的角度。配合 beta 可以控制视角的方向。[ default: 40 ]
          beta: -80, // 视角绕 y 轴，即左右旋转的角度。[ default: 0 ]
          minAlpha: 5, // 上下旋转的最小 alpha 值。即视角能旋转到达最上面的角度。[ default: 5 ]
          maxAlpha: 90, // 上下旋转的最大 alpha 值。即视角能旋转到达最下面的角度。[ default: 90 ]
          minBeta: -80, // 左右旋转的最小 beta 值。即视角能旋转到达最左的角度。[ default: -80 ]
          maxBeta: 80 // 左右旋转的最大 beta 值。即视角能旋转到达最右的角度。[ default: 80 ]
          // autoRotate: true, // 自动旋转
          // autoRotateAfterStill: 3,
          // animation: true, // 是否开启动画。[ default: true ]
          // animationDurationUpdate: 1000, // 过渡动画的时长。[ default: 1000 ]
          // animationEasingUpdate: 'cubicInOut' // 过渡动画的缓动效果。[ default: cubicInOut ]
        },

        // 鼠标移动样式
        // emphasis: {
        //   label: {
        //     show: false,
        //     textStyle: {
        //       color: '#ffffff',
        //       fontSize: 14,
        //       fontWeight: 'bold',
        //       backgroundColor: 'rgba(0,23,11,0)'
        //     }
        //   },
        //   itemStyle: {
        //     // areaColor: 'rgb(5,101,123)',
        //     /*  areaColor: '#daa969', */
        //     areaColor: 'rgba(255,235,104,1)',
        //     opacity: 1,
        //     borderWidth: 1,
        //     borderColor: 'rgb(62,215,213)'
        //   }
        // },
        label: {
          show: false,
          position: 'top',
          color: '#111', // 地图初始化区域字体颜色
          fontSize: 14,
          lineHeight: 16
          // textStyle: {
          //   color: "#fff", //地图初始化区域字体颜色
          //   fontSize: 12,
          //   opacity: 1,
          //   backgroundColor: "rgba(0,23,11,0)",
          // },
        },
        light: {
          // 光照阴影
          main: {
            color: '#fff', // 光照颜色
            intensity: 0.5, // 光照强度
            shadow: true, // 是否显示阴影
            shadowQuality: 'ultra', // 阴影质量 ultra //阴影亮度
            alpha: 55,
            beta: 10
          },
          ambient: {
            intensity: 0.5
          }
        },
        coordinateSystem: 'geo3D',
        // boxDepth: 60, // 地图倾斜度
        regionHeight: 4, // 地图厚度
        center: ['50%', '50%'],
        shading: 'realistic',
        realisticMaterial: {
          detailTexture: '/1.png', // 纹理贴图
          textureTiling: 1, // 纹理平铺，1是拉伸，数字表示纹理平铺次数
          roughness: 1, // 材质粗糙度，0完全光滑，1完全粗糙
          metalness: 0, // 0材质是非金属 ，1金属
          roughnessAdjust: 1
        },
        groundPlane: {
          // 地面可以让整个组件有个“摆放”的地方，从而使整个场景看起来更真实，更有模型感。
          // show: true, // 是否显示地面。[ default: false ]
          color: '#aaa' // 地面颜色。[ default: '#aaa' ]
        },
        silent: true // 图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
      }

      // {
      //   map: 'nanjing',
      //   roam: true,
      //   itemStyle: {
      //     color: '#1d3168',
      //     // shadowColor: '#000',
      //     // shadowOffsetX: 100,
      //     // shadowOffsetY: 25,
      //     // opacity: 1,
      //     // borderWidth: 1,
      //     // borderColor: '#00ffff'
      //     opacity: 1,
      //     borderWidth: 10,
      //     borderColor: '#67ddf0'
      //   },
      //   viewControl: {
      //     projection: 'perspective',
      //     distance: 120, // 地图视角 控制初始大小
      //     rotateSensitivity: 0, // 旋转
      //     zoomSensitivity: 0, // 缩放
      //     center: [0, -8, 0], // 默认000
      //     alpha: 50, // 视角绕 x 轴，即上下旋转的角度。配合 beta 可以控制视角的方向。[ default: 40 ]
      //     beta: 5, // 视角绕 y 轴，即左右旋转的角度。[ default: 0 ]
      //     minAlpha: 5, // 上下旋转的最小 alpha 值。即视角能旋转到达最上面的角度。[ default: 5 ]
      //     maxAlpha: 90, // 上下旋转的最大 alpha 值。即视角能旋转到达最下面的角度。[ default: 90 ]
      //     minBeta: -80, // 左右旋转的最小 beta 值。即视角能旋转到达最左的角度。[ default: -80 ]
      //     maxBeta: 80 // 左右旋转的最大 beta 值。即视角能旋转到达最右的角度。[ default: 80 ]
      //     // autoRotate: true, // 自动旋转
      //     // autoRotateAfterStill: 3,
      //     // animation: true, // 是否开启动画。[ default: true ]
      //     // animationDurationUpdate: 1000, // 过渡动画的时长。[ default: 1000 ]
      //     // animationEasingUpdate: 'cubicInOut' // 过渡动画的缓动效果。[ default: cubicInOut ]
      //   },

      //   // emphasis: {
      //   //   label: {
      //   //     show: false,
      //   //     textStyle: {
      //   //       color: '#ffffff',
      //   //       fontSize: 14,
      //   //       fontWeight: 'bold',
      //   //       backgroundColor: 'rgba(0,23,11,0)'
      //   //     }
      //   //   },
      //   //   itemStyle: {
      //   //     // areaColor: 'rgb(5,101,123)',
      //   //     /*  areaColor: '#daa969', */
      //   //     areaColor: 'rgba(0,27,95,0.4)',
      //   //     borderColor: '#004db5',
      //   //     borderWidth: 1
      //   //   }
      //   // },
      //   label: {
      //     show: true,
      //     position: 'top',
      //     color: '#111', // 地图初始化区域字体颜色
      //     fontSize: 14,
      //     lineHeight: 16
      //     // textStyle: {
      //     //   color: "#fff", //地图初始化区域字体颜色
      //     //   fontSize: 12,
      //     //   opacity: 1,
      //     //   backgroundColor: "rgba(0,23,11,0)",
      //     // },
      //   },
      //   // light: {
      //   //   // 光照阴影
      //   //   main: {
      //   //     color: '#000', // 光照颜色
      //   //     intensity: 1, // 光照强度
      //   //     // shadowQuality: 'high', //阴影亮度
      //   //     shadow: true, // 是否显示阴影
      //   //     shadowQuality: 'medium', // 阴影质量 ultra //阴影亮度
      //   //     alpha: 55,
      //   //     beta: 10
      //   //   },
      //   //   ambient: {
      //   //     intensity: 0.7
      //   //   }
      //   // },
      //   coordinateSystem: 'geo3D',
      //   boxDepth: 60, // 地图倾斜度
      //   regionHeight: 1.6, // 地图厚度
      //   shading: 'lambert',
      //   zlevel: -11,
      //   silent: true // 图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
      // }
    ],
    visualMap: {
      min: 0,
      max: 50000,
      calculable: true,
      inRange: {
        color: ['#f2c31a', '#e94e1b']
      }
    },
    series: [
      {
        name: 'map3D', // series名称
        type: 'map3D', // series图表类型
        map: 'nanjing',
        left: '0%',
        regionHeight: 2, // 三维高度
        label: {
          show: false,
          position: 'top',
          color: '#111', // 地图初始化区域字体颜色
          fontSize: 14,
          lineHeight: 16
          // textStyle: {
          //   color: "#fff", //地图初始化区域字体颜色
          //   fontSize: 12,
          //   opacity: 1,
          //   backgroundColor: "rgba(0,23,11,0)",
          // },
        },
        itemStyle: {
          // 三维地理坐标系组件 中三维图形的视觉属性，包括颜色，透明度，描边等。
          color: '#506e99', // 地图板块的颜色
          opacity: 1, // 图形的不透明度 [ default: 1 ]
          borderWidth: 4, // (地图板块间的分隔线)图形描边的宽度。加上描边后可以清晰的区分每个区域
          borderColor: '#66ddf0' // 图形描边的颜色。[ default: #333 ]
        },
        viewControl: {
          projection: 'perspective',
          distance: 100, // 地图视角 控制初始大小
          rotateSensitivity: 0, // 旋转
          zoomSensitivity: 0, // 缩放
          alpha: 30, // 视角绕 x 轴，即上下旋转的角度。配合 beta 可以控制视角的方向。[ default: 40 ]
          beta: -80, // 视角绕 y 轴，即左右旋转的角度。[ default: 0 ]
          minAlpha: 5, // 上下旋转的最小 alpha 值。即视角能旋转到达最上面的角度。[ default: 5 ]
          maxAlpha: 90, // 上下旋转的最大 alpha 值。即视角能旋转到达最下面的角度。[ default: 90 ]
          minBeta: -80, // 左右旋转的最小 beta 值。即视角能旋转到达最左的角度。[ default: -80 ]
          maxBeta: 80 // 左右旋转的最大 beta 值。即视角能旋转到达最右的
        },
        silent: true // 图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
        //     data: [
        //   {name: '浦口区', value: 19899},
        //   {name: '建邺区', value: 23134},
        //   {name: '栖霞区', value: 34576},
        // ]
      }
    ]
  }

  myEchart.setOption(option)
})
</script>

<style lang="less" scoped>
#myChartMap {
  width: 100%;
  height: 100%;
}
</style>
