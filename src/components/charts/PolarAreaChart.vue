<template>
  <div class="chart-container">
    <h2>Distribución de Recursos</h2>
    <p class="subtitle">Porcentaje de CPU por proceso</p>
    <div class="chart-wrapper">
      <PolarArea 
        :data="{
          labels: ['Servidor Web', 'Base de Datos', 'Caché', 'APIs', 'Analíticas'],
          datasets: [{
            data: [35, 25, 15, 18, 7],
            backgroundColor: [
              '#3B82F6',
              '#10B981',
              '#F59E0B',
              '#EF4444',
              '#8B5CF6'
            ],
            borderWidth: 1
          }]
        }" 
        :options="{
          responsive: true,
          maintainAspectRatio: false
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PolarArea } from 'vue-chartjs';
import { Chart, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(RadialLinearScale, ArcElement, Tooltip, Legend);
</script>

<style scoped>
.chart-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

h2 {
  font-size: 16px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 5px;
  color: #111111;
}

.subtitle {
  font-size: 12px;
  color: #333333;
  margin-top: 0;
  margin-bottom: 12px;
}

.chart-wrapper {
  flex: 1;
  position: relative;
  min-height: 0;
}
</style> 