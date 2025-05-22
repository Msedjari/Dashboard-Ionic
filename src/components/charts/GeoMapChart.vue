<template>
  <div class="chart-wrapper">
    <div class="chart-header">
      <h2>{{ chartData.title }}</h2>
      <p>{{ chartData.subtitle }}</p>
    </div>
    <div class="chart-container">
      <v-chart class="chart" :option="chartOption" autoresize />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components';
import VChart from 'vue-echarts';
import { onIonViewDidEnter } from '@ionic/vue';

// Registrar los componentes ECharts necesarios
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

interface ChartItem {
  name: string;
  value: number;
}

const chartData = ref({
  title: 'Champions League',
  subtitle: 'Títulos por país',
  data: [
    { name: 'España', value: 19 },
    { name: 'Inglaterra', value: 14 },
    { name: 'Italia', value: 12 },
    { name: 'Alemania', value: 8 },
    { name: 'Países Bajos', value: 6 },
    { name: 'Portugal', value: 4 },
    { name: 'Francia', value: 1 }
  ] as ChartItem[],
  colors: [
    '#3B82F6', '#10B981', '#F59E0B', '#EF4444', 
    '#6366F1', '#EC4899', '#8B5CF6', '#14B8A6',
    '#F97316', '#06B6D4'
  ]
});

const chartOption = computed(() => {
  return {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 'center',
      type: 'scroll',
      textStyle: {
        fontSize: 12,
        color: '#000000'
      }
    },
    series: [
      {
        name: 'Títulos Champions',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 4,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '16',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: chartData.value.data.map((item: ChartItem) => ({
          name: item.name,
          value: item.value
        }))
      }
    ],
    color: chartData.value.colors
  };
});

onMounted(() => {
  // No es necesario cargar datos externos
});

// Recargar datos cuando la vista se active
onIonViewDidEnter(() => {
  // No es necesario cargar datos externos
});
</script>

<style scoped>
.chart-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.chart-header {
  margin-bottom: 16px;
}

.chart-header h2 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 5px 0;
  color: #111111;
}

.chart-header p {
  font-size: 12px;
  color: #333333;
  margin: 0;
}

.chart-container {
  flex: 1;
  min-height: 0;
  display: flex;
}

.chart {
  width: 100%;
  height: 100%;
}
</style> 