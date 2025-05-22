<template>
  <div class="chart-wrapper">
    <div class="chart-header">
      <h2>{{ chartData.title }}</h2>
      <p>{{ chartData.subtitle }}</p>
    </div>
    <div class="chart-container">
      <apexchart
        type="radar"
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

// Datos del radar
const chartData = ref({
  title: 'Métricas del Sistema',
  subtitle: 'Análisis técnico en tiempo real',
  data: {
    categories: ['Latencia', 'Rendimiento', 'Estabilidad', 'Seguridad', 'Escalabilidad', 'Resiliencia'],
    series: [
      {
        name: 'Actual',
        data: [0, 0, 0, 0, 0, 0]
      },
      {
        name: 'Objetivo',
        data: [80, 90, 85, 95, 75, 80]
      }
    ]
  },
  colors: ['#4318FF', '#39B8FF']
});

let intervalId: number | null = null;

const chartOptions = computed(() => {
  return {
    chart: {
      type: 'radar',
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
    labels: chartData.value.data.categories,
    plotOptions: {
      radar: {
        size: undefined,
        polygons: {
          strokeColors: '#e9e9e9',
          fill: {
            colors: ['#f8f8f8', '#fff']
          }
        }
      }
    },
    stroke: {
      width: 2
    },
    fill: {
      opacity: 0.1
    },
    markers: {
      size: 4,
      colors: chartData.value.colors,
      strokeWidth: 2,
      hover: {
        size: 6
      }
    },
    tooltip: {
      theme: 'light',
      style: {
        fontSize: '12px',
        fontFamily: 'inherit'
      },
      y: {
        formatter: function(val: number) {
          return val.toString();
        }
      },
      x: {
        show: true
      },
      marker: {
        show: true
      },
      cssClass: 'dark-tooltip'
    },
    yaxis: {
      show: false,
      max: 100
    },
    xaxis: {
      labels: {
        style: {
          fontSize: '12px',
          colors: '#000000'
        }
      }
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

const generateRandomData = () => {
  // Genera valores aleatorios para el radar entre 30 y 95
  const newData = chartData.value.data.categories.map(() => {
    return Math.floor(Math.random() * 65) + 30;
  });
  
  // Actualiza solo la primera serie (valores actuales)
  // La segunda serie se mantiene fija como los valores objetivo
  chartData.value.data.series[0].data = newData;
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