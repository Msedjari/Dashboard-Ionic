<template>
  <div class="chart-wrapper">
    <div class="chart-header">
      <h2>{{ chartData.title }}</h2>
      <p>{{ chartData.subtitle }}</p>
    </div>
    <div class="chart-container">
      <apexchart
        type="bubble"
        height="100%"
        width="100%"
        :options="chartOptions"
        :series="chartOptions.series"
      ></apexchart>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import { onIonViewDidEnter } from '@ionic/vue';

// Datos de burbujas
const chartData = ref({
  title: '',
  subtitle: '',
  data: {
    series: []
  },
  colors: []
});

const chartOptions = computed(() => {
  return {
    chart: {
      type: 'bubble',
      height: '100%',
      width: '100%',
      toolbar: {
        show: false
      },
      fontFamily: 'inherit',
      animations: {
        enabled: true
      },
      foreColor: '#000000'
    },
    colors: chartData.value.colors,
    series: chartData.value.data.series,
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 0.8
    },
    xaxis: {
      tickAmount: 6,
      type: 'category',
      title: {
        text: 'Peticiones/s',
        style: {
          fontSize: '12px',
          fontWeight: 600,
          color: '#333333'
        }
      },
      labels: {
        style: {
          fontSize: '12px',
          colors: '#000000'
        }
      }
    },
    yaxis: {
      max: 60,
      title: {
        text: 'Usuarios',
        style: {
          fontSize: '12px',
          fontWeight: 600,
          color: '#333333'
        }
      },
      labels: {
        style: {
          fontSize: '12px',
          colors: '#000000'
        }
      }
    },
    tooltip: {
      theme: 'light',
      style: {
        fontSize: '12px',
        fontFamily: 'inherit'
      },
      custom: function({ series, seriesIndex, dataPointIndex, w }: any) {
        const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
        return `
          <div class="custom-tooltip">
            <div class="tooltip-title">${w.globals.initialSeries[seriesIndex].name}</div>
            <div class="tooltip-content">
              <div>Peticiones/s: ${data.x}</div>
              <div>Usuarios: ${data.y}</div>
              <div>Tiempo de carga: ${data.z} ms</div>
            </div>
          </div>
        `;
      },
      cssClass: 'dark-tooltip'
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 280
          }
        }
      }
    ]
  };
});

const loadChartData = async () => {
  try {
    const response = await fetch('/src/data/charts/bubble-chart.json');
    const data = await response.json();
    chartData.value = data;
  } catch (error) {
    console.error('Error cargando datos del gráfico:', error);
  }
};

onMounted(() => {
  loadChartData();
});

// Recargar datos cuando la vista se active
onIonViewDidEnter(() => {
  loadChartData();
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
}

:deep(.dark-tooltip) {
  background: #fff !important;
  color: #000 !important;
  border: 1px solid #ddd !important;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
  padding: 8px !important;
}

:deep(.custom-tooltip) {
  padding: 4px;
}

:deep(.tooltip-title) {
  font-weight: bold;
  font-size: 13px;
  margin-bottom: 4px;
  color: #000 !important;
}

:deep(.tooltip-content) {
  display: flex;
  flex-direction: column;
  gap: 3px;
  color: #333 !important;
}
</style> 