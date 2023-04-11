<!--
 * @Author: TQtong 2733707740@qq.com
 * @Date: 2023-04-11 09:18:53
 * @LastEditors: TQtong 2733707740@qq.com
 * @LastEditTime: 2023-04-11 16:14:15
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

let geojson = [] as any
const myChartMap = ref()

onMounted(async () => {
  const res = await getJsonDataApi()
  geojson = res

  echarts.registerMap('nanjing', geojson)
  const myEchart = echarts.init(myChartMap.value)
  const option = {
    geo: [
      {
        map: 'nanjing',
        aspectScale: 0.9,
        roam: false, // 是否允许缩放
        zoom: 0.7, // 默认显示级别
        layoutSize: '95%',
        layoutCenter: ['55%', '50%'],
        itemStyle: {
          normal: {
            areaColor: {
              type: 'linear-gradient',
              x: 0,
              y: 400,
              x2: 0,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(37,108,190,0.3)' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(15,169,195,0.3)' // 50% 处的颜色
                }
              ],
              global: true // 缺省为 false
            },
            borderColor: '#4ecee6',
            borderWidth: 1
          },
          emphasis: {
            areaColor: {
              type: 'linear-gradient',
              x: 0,
              y: 300,
              x2: 0,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(37,108,190,1)' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(15,169,195,1)' // 50% 处的颜色
                }
              ],
              global: true // 缺省为 false
            }
          }
        },
        emphasis: {
          itemStyle: {
            areaColor: '#0160AD'
          },
          label: {
            show: 0,
            color: '#fff'
          }
        },
        zlevel: 3
      },
      {
        map: 'nanjing',
        aspectScale: 0.9,
        roam: false, // 是否允许缩放
        zoom: 0.8, // 默认显示级别
        layoutSize: '95%',
        layoutCenter: ['55%', '50%'],
        itemStyle: {
          normal: {
            borderColor: 'rgba(192,245,249,.6)',
            borderWidth: 2,
            shadowColor: '#2C99F6',
            shadowOffsetY: 0,
            shadowBlur: 120,
            areaColor: 'rgba(29,85,139,.2)'
          }
        },
        zlevel: 2,
        silent: true
      },
      {
        map: 'nanjing',
        aspectScale: 0.9,
        roam: false, // 是否允许缩放
        zoom: 0.8, // 默认显示级别
        layoutSize: '95%',
        layoutCenter: ['55%', '51.5%'],
        itemStyle: {
          // areaColor: '#005DDC',
          areaColor: 'rgba(0,27,95,0.4)',
          borderColor: '#004db5',
          borderWidth: 1
        },
        zlevel: 1,
        silent: true
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
