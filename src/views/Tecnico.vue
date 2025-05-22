<template>
  <div class="technique-view">
    <div class="stats-container">
      <ion-col>
        <StatCard 
          title="Velocidad App" 
          value="1.08s" 
          :icon="timeOutline" 
          color="primary"
        />
      </ion-col>
      <ion-col>
        <StatCard 
          title="Uptime Streaming" 
          value="99.9%" 
          :icon="checkmarkCircleOutline" 
          color="success"
        />
      </ion-col>
      <ion-col>
        <StatCard 
          title="Errores VAR" 
          value="8" 
          :icon="alertCircleOutline" 
          color="warning"
        />
      </ion-col>
      <ion-col>
        <StatCard 
          title="Req. API Partidos" 
          value="5.823/min" 
          :icon="serverOutline" 
          color="danger"
        />
      </ion-col>
    </div>

    <div class="charts-container">
      <div class="chart-card first-row">
        <HorizontalBarChart />
      </div>
      <div class="chart-card first-row">
        <TechniqueRadarChart />
      </div>
      <div class="chart-card second-row">
        <BubbleChart />
      </div>
      <div class="chart-card second-row">
        <PolarAreaChart />
      </div>
      <div class="chart-card second-row">
        <BoxPlotChart />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IonCol } from '@ionic/vue';
import { timeOutline, checkmarkCircleOutline, alertCircleOutline, serverOutline } from 'ionicons/icons';
import StatCard from '@/components/StatCard.vue';
import TechniqueRadarChart from '@/components/charts/TechniqueRadarChart.vue';
import HorizontalBarChart from '@/components/charts/HorizontalBarChart.vue';
import BubbleChart from '@/components/charts/BubbleChart.vue';
import PolarAreaChart from '@/components/charts/PolarAreaChart.vue';
import BoxPlotChart from '@/components/charts/BoxPlotChart.vue';
</script>

<style scoped>
.technique-view {
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
  grid-column: 1 / 3;  /* Now HorizontalBarChart spans 2 columns */
}

.chart-card.first-row:nth-child(2) {
  grid-column: 3 / 4;  /* Now TechniqueRadarChart is in the third column */
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
  color: #111111;
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
  .technique-view {
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