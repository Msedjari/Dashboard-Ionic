<template>
  <div class="chart-wrapper">
    <div class="chart-header">
      <h2>{{ chartData.title }}</h2>
      <p>{{ chartData.subtitle }}</p>
    </div>
    <div class="chart-container">
      <apexchart
        type="line"
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

// Datos fijos de fútbol
const chartData = ref({
  title: 'Evolución de Puntos',
  subtitle: 'Temporada 2023-2024',
  data: {
    categories: ['Jornada 30', 'Jornada 31', 'Jornada 32', 'Jornada 33', 'Jornada 34', 'Jornada 35', 'Jornada 36', 'Jornada 37', 'Jornada 38'],
    series: [
      {
        name: 'Real Madrid',
        data: [75, 78, 81, 84, 87, 90, 93, 96, 99]
      },
      {
        name: 'FC Barcelona',
        data: [67, 70, 73, 76, 76, 79, 82, 85, 88]
      },
      {
        name: 'Atlético de Madrid',
        data: [61, 64, 67, 67, 70, 73, 73, 76, 79]
      }
    ]
  },
  colors: ['#FFF04D', '#4D7EFF', '#FF4D4D']
});

const chartOptions = computed(() => {
  return {
    chart: {
      height: '100%',
      width: '100%',
      type: 'line',
      toolbar: {
        show: false
      },
      fontFamily: 'inherit',
      zoom: {
        enabled: false
      },
      animations: {
        enabled: true
      },
      foreColor: '#000000'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 3,
      curve: 'smooth',
      lineCap: 'round'
    },
    colors: chartData.value.colors,
    series: chartData.value.data.series,
    xaxis: {
      categories: chartData.value.data.categories,
      labels: {
        style: {
          fontSize: '12px',
          colors: '#000000'
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        formatter: function(val: number) {
          return val.toString() + ' pts';
        },
        style: {
          fontSize: '12px',
          colors: '#000000'
        }
      }
    },
    grid: {
      strokeDashArray: 5,
      borderColor: 'rgba(0, 0, 0, 0.05)'
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right'
    },
    tooltip: {
      theme: 'light',
      style: {
        fontSize: '12px',
        fontFamily: 'inherit'
      },
      y: {
        formatter: function(val: number) {
          return val.toString() + ' puntos';
        }
      },
      x: {
        show: true
      },
      marker: {
        show: true
      },
      cssClass: 'dark-tooltip',
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 280
          },
          legend: {
            position: 'bottom',
            horizontalAlign: 'center'
          }
        }
      }
    ]
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
}

:deep(.dark-tooltip) {
  background: #fff !important;
  color: #000 !important;
  border: 1px solid #ddd !important;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
}

:deep(.dark-tooltip .apexcharts-tooltip-title) {
  background: #f8f8f8 !important;
  color: #000 !important;
  border-bottom: 1px solid #ddd !important;
}

:deep(.dark-tooltip .apexcharts-tooltip-text) {
  color: #000 !important;
}
</style> 