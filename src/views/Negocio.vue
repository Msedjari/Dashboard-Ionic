<template>
  <div class="business-view">
    <div class="stats-container">
      <ion-col>
        <StatCard 
          title="Partidos Jugados" 
          value="38" 
          :icon="footballOutline" 
          color="primary"
        />
      </ion-col>
      <ion-col>
        <StatCard 
          title="Goles Totales" 
          value="1.095" 
          :icon="trophyOutline" 
          color="success"
        />
      </ion-col>
      <ion-col>
        <StatCard 
          title="Aficionados" 
          value="14.325.840" 
          :icon="peopleOutline" 
          color="warning"
        />
      </ion-col>
      <ion-col>
        <StatCard 
          title="Eficacia Tiros" 
          :value="conversionRate" 
          :icon="analyticsOutline" 
          color="danger"
        />
      </ion-col>
    </div>

    <div class="charts-container">
      <div class="chart-card first-row">
        <SalesLineChart />
      </div>
      <div class="chart-card first-row">
        <RevenueBarChart />
      </div>
      <div class="chart-card second-row">
        <UserGrowthAreaChart />
      </div>
      <div class="chart-card second-row">
        <GeoMapChart />
      </div>
      <div class="chart-card second-row">
        <LiveConversionChart />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { IonCol } from '@ionic/vue';
import { peopleOutline, trophyOutline, footballOutline, analyticsOutline } from 'ionicons/icons';
import StatCard from '@/components/StatCard.vue';
import SalesLineChart from '@/components/charts/SalesLineChart.vue';
import RevenueBarChart from '@/components/charts/RevenueBarChart.vue';
import UserGrowthAreaChart from '@/components/charts/UserGrowthAreaChart.vue';
import GeoMapChart from '@/components/charts/GeoMapChart.vue';
import LiveConversionChart from '@/components/charts/LiveConversionChart.vue';

// Define el tipo de datos para el evento personalizado
interface ConversionRateUpdateEvent extends CustomEvent {
  detail: {
    value: number;
  };
}

// Valor inicial para la tasa de conversión
const conversionRate = ref('39%');

// Función para actualizar la tasa de conversión cuando se recibe el evento
function updateConversionRate(event: ConversionRateUpdateEvent) {
  const newValue = event.detail.value;
  conversionRate.value = `${newValue}%`;
}

// Agregar y eliminar el event listener cuando se monta y desmonta el componente
onMounted(() => {
  window.addEventListener('conversion-rate-update', updateConversionRate as EventListener);
});

onUnmounted(() => {
  window.removeEventListener('conversion-rate-update', updateConversionRate as EventListener);
});
</script>

<style scoped>
.business-view {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem; 
  padding-top: 4vh; 
  padding-bottom: 1vh;
  margin-top: 0;
  overflow: hidden; /* Hidden by default for larger screens */
  padding-left: 1rem;
  padding-right: 1rem;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  flex-shrink: 0;
  margin-top: 20px;
  padding-top: 10px;
  width: 100%;
}

.charts-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);
  gap: 15px;
  flex: 1;
  min-height: 0;
  max-height: 100%;
  width: 100%;
}

.chart-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 12px;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
}

.first-row {
  grid-row: 1;
}

.second-row {
  grid-row: 2;
}

.chart-card.first-row:nth-child(1) {
  grid-column: 1 / 3;  /* This will make first chart span 2 columns */
}

.chart-card.first-row:nth-child(2) {
  grid-column: 3 / 4;  /* This will position second chart in the third column */
}

.chart-card.second-row:nth-child(3) {
  grid-column: 1 / 2;  /* First chart in second row */
}

.chart-card.second-row:nth-child(4) {
  grid-column: 2 / 3;  /* Second chart in second row */
}

.chart-card.second-row:nth-child(5) {
  grid-column: 3 / 4;  /* Third chart in second row */
}

.chart-card h2 {
  font-size: 16px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 16px;
  color: var(--ion-color-dark);
  flex-shrink: 0;
}

/* Tablet layout */
@media (max-width: 1024px) and (min-width: 769px) {
  .charts-container {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
  
  .chart-card.first-row:nth-child(1) {
    grid-column: 1 / 3; /* Keep spanning two columns */
    grid-row: 1;
  }
  
  .chart-card.first-row:nth-child(2) {
    grid-column: 1 / 3; /* Make it full width in second row */
    grid-row: 2;
  }
  
  .chart-card.second-row:nth-child(3) {
    grid-column: 1 / 2;
    grid-row: 3;
  }
  
  .chart-card.second-row:nth-child(4) {
    grid-column: 2 / 3;
    grid-row: 3;
  }
  
  .chart-card.second-row:nth-child(5) {
    grid-column: 1 / 3; /* Full width in fourth row */
    grid-row: 4;
  }
}

/* Mobile layout */
@media (max-width: 768px) {
  .business-view {
    padding-top: 2vh;
    gap: 0.8rem;
    height: auto;
    overflow: auto;
    padding-bottom: 2vh;
  }

  .stats-container {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .charts-container {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }
  
  .chart-card {
    min-height: 300px; /* Fixed minimum height for charts on mobile */
    margin-bottom: 15px; /* Add space between charts when stacked */
  }
  
  .chart-card.first-row:nth-child(1),
  .chart-card.first-row:nth-child(2),
  .chart-card.second-row:nth-child(3),
  .chart-card.second-row:nth-child(4),
  .chart-card.second-row:nth-child(5) {
    grid-column: 1;
  }
  
  .chart-card.first-row:nth-child(1) {
    grid-row: 1;
  }
  
  .chart-card.first-row:nth-child(2) {
    grid-row: 2;
  }
  
  .chart-card.second-row:nth-child(3) {
    grid-row: 3;
  }
  
  .chart-card.second-row:nth-child(4) {
    grid-row: 4;
  }
  
  .chart-card.second-row:nth-child(5) {
    grid-row: 5;
  }
}

/* Small mobile devices */
@media (max-width: 480px) {
  .stats-container {
    grid-template-columns: 1fr;
  }
  
  .chart-card {
    padding: 8px;
  }
  
  .chart-card h2 {
    font-size: 14px;
    margin-bottom: 10px;
  }
}
</style> 