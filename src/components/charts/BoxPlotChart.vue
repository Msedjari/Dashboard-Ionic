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
import { BoxplotChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent, LegendComponent, GridComponent } from 'echarts/components';
import VChart from 'vue-echarts';
import { onIonViewDidEnter } from '@ionic/vue';

// Registrar los componentes ECharts necesarios
use([
  CanvasRenderer,
  BoxplotChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
]);

interface BoxPlotData {
  name: string;
  values: number[];
}

const chartData = ref({
  title: 'Tiempos de Carga',
  subtitle: 'En milisegundos por página',
  data: [
    {
      name: 'Inicio',
      boxData: [820, 932, 901, 934, 1290]
    },
    {
      name: 'Tienda',
      boxData: [1200, 1300, 1350, 1400, 1500]
    },
    {
      name: 'Perfil',
      boxData: [720, 750, 770, 810, 890]
    },
    {
      name: 'Catálogo',
      boxData: [1220, 1270, 1300, 1350, 1380]
    },
    {
      name: 'Blog',
      boxData: [880, 910, 930, 950, 985]
    }
  ],
  colors: ['#4D7EFF', '#FF6B6B', '#4CAF50', '#FFC107', '#9C27B0']
});

const chartOption = computed(() => {
  const data = chartData.value.data;
  const names = data.map(item => item.name);
  const boxData = data.map(item => item.boxData);
  
  return {
    title: {
      show: false
    },
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function (params: any) {
        const data = params.data;
        return `
          <div style="font-weight: bold; margin-bottom: 5px; color: #000;">${params.name}</div>
          <div style="color: #333;">
            <div>Máximo: ${data[4]} ms</div>
            <div>Q3: ${data[3]} ms</div>
            <div>Mediana: ${data[2]} ms</div>
            <div>Q1: ${data[1]} ms</div>
            <div>Mínimo: ${data[0]} ms</div>
          </div>
        `;
      },
      backgroundColor: '#fff',
      borderColor: '#ddd',
      borderWidth: 1,
      textStyle: {
        color: '#333'
      }
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '15%'
    },
    xAxis: {
      type: 'category',
      data: names,
      boundaryGap: true,
      nameGap: 30,
      axisLabel: {
        color: '#000000'
      },
      splitArea: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      name: 'Tiempo (ms)',
      nameLocation: 'middle',
      nameGap: 40,
      nameTextStyle: {
        color: '#333333',
        fontWeight: 'bold'
      },
      axisLabel: {
        color: '#000000',
        formatter: '{value} ms'
      }
    },
    series: [
      {
        name: 'Tiempos de Carga',
        type: 'boxplot',
        data: boxData,
        itemStyle: {
          color: function(params: any) {
            return chartData.value.colors[params.dataIndex] || '#5470c6';
          }
        }
      }
    ]
  };
});

onMounted(() => {
  // Los datos ya están predefinidos
});

// Recargar datos cuando la vista se active
onIonViewDidEnter(() => {
  // No es necesario cargar datos
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