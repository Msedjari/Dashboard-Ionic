<template>
  <div class="chart-wrapper">
    <div class="chart-header">
      <h2>{{ chartData.title }}</h2>
      <p>{{ chartData.subtitle }}</p>
    </div>
    <div class="chart-container">
      <apexchart
        type="bar"
        height="100%"
        width="100%"
        :options="chartOptions"
        :series="chartOptions.series"
      ></apexchart>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import { onIonViewDidEnter, onIonViewWillLeave } from '@ionic/vue';

// Datos de barras horizontales
const chartData = ref({
  title: 'Rendimiento API',
  subtitle: 'Tiempos de respuesta en tiempo real (ms)',
  data: {
    categories: ['Login API', 'Estadísticas API', 'Streaming API', 'Datos usuario', 'Partidos API'],
    series: [{
      name: 'Tiempo respuesta',
      data: [0, 0, 0, 0, 0]
    }]
  },
  colors: ['#4318FF', '#6AD2FF', '#EFF4FB']
});

let intervalId: number | null = null;

const chartOptions = computed(() => {
  return {
    chart: {
      type: 'bar',
      height: '100%',
      width: '100%',
      toolbar: {
        show: false
      },
      fontFamily: 'inherit',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      },
      foreColor: '#000000'
    },
    colors: chartData.value.colors,
    series: chartData.value.data.series,
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: '55%',
        borderRadius: 4,
        dataLabels: {
          position: 'top'
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function(val: number) {
        return val + ' ms';
      },
      offsetX: 10,
      style: {
        fontSize: '12px',
        colors: ['#000000']
      }
    },
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
    tooltip: {
      theme: 'light',
      style: {
        fontSize: '12px',
        fontFamily: 'inherit'
      },
      y: {
        formatter: function(val: number) {
          return val + ' ms';
        }
      },
      cssClass: 'dark-tooltip'
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 280
          },
          dataLabels: {
            enabled: false
          }
        }
      }
    ]
  };
});

const generateRandomData = () => {
  const newData = chartData.value.data.categories.map(() => {
    // Generar tiempos de respuesta entre 50ms y 400ms
    return Math.floor(Math.random() * 350) + 50;
  });
  
  chartData.value.data.series = [{
    name: 'Tiempo respuesta',
    data: newData
  }];
};

const startRealTimeUpdates = () => {
  // Genera datos iniciales
  generateRandomData();
  
  // Actualiza los datos cada segundo
  intervalId = window.setInterval(() => {
    generateRandomData();
  }, 1000);
};

const stopRealTimeUpdates = () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

onMounted(() => {
  startRealTimeUpdates();
});

// Recargar datos cuando la vista se active
onIonViewDidEnter(() => {
  startRealTimeUpdates();
});

// Detener actualizaciones cuando se salga de la vista
onIonViewWillLeave(() => {
  stopRealTimeUpdates();
});

// Limpieza al desmontar el componente
onUnmounted(() => {
  stopRealTimeUpdates();
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