<template>
  <div class="chart-container">
    <h2>Mapa de Calor del Estadio</h2>
    <p class="subtitle">Concentración de juego en el campo</p>
    <div class="chart-wrapper">
      <div class="stadium-heatmap">
        <div class="field-container">
          <div class="field">
            <div class="field-lines">
              <div class="center-circle"></div>
              <div class="center-line"></div>
              <div class="penalty-area left"></div>
              <div class="penalty-area right"></div>
              <div class="goal left"></div>
              <div class="goal right"></div>
            </div>
            
            <!-- Zonas de calor -->
            <div class="heat-zone zone1" title="25% de actividad"></div>
            <div class="heat-zone zone2" title="45% de actividad"></div>
            <div class="heat-zone zone3" title="75% de actividad"></div>
            <div class="heat-zone zone4" title="90% de actividad"></div>
            <div class="heat-zone zone5" title="65% de actividad"></div>
            <div class="heat-zone zone6" title="55% de actividad"></div>
            <div class="heat-zone zone7" title="80% de actividad"></div>
          </div>
        </div>
        <div class="legend">
          <div class="legend-item">
            <div class="legend-color low"></div>
            <span>Baja actividad</span>
          </div>
          <div class="legend-item">
            <div class="legend-color medium"></div>
            <span>Media actividad</span>
          </div>
          <div class="legend-item">
            <div class="legend-color high"></div>
            <span>Alta actividad</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StadiumHeatMap'
});
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.stadium-heatmap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.field-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.field {
  width: 90%;
  height: 85%;
  background-color: #4CAF50;
  position: relative;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.field-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.center-circle {
  position: absolute;
  width: 60px;
  height: 60px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.center-line {
  position: absolute;
  width: 2px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.penalty-area {
  position: absolute;
  width: 20%;
  height: 40%;
  border: 2px solid rgba(255, 255, 255, 0.7);
  top: 50%;
  transform: translateY(-50%);
}

.penalty-area.left {
  left: 0;
  border-left: none;
}

.penalty-area.right {
  right: 0;
  border-right: none;
}

.goal {
  position: absolute;
  width: 5%;
  height: 20%;
  background-color: rgba(255, 255, 255, 0.3);
  top: 50%;
  transform: translateY(-50%);
}

.goal.left {
  left: 0;
}

.goal.right {
  right: 0;
}

/* Zonas de calor */
.heat-zone {
  position: absolute;
  border-radius: 50%;
  opacity: 0.7;
}

.zone1 {
  background-color: rgba(255, 235, 59, 0.6);
  width: 80px;
  height: 80px;
  top: 30%;
  left: 20%;
}

.zone2 {
  background-color: rgba(255, 152, 0, 0.6);
  width: 100px;
  height: 100px;
  top: 25%;
  left: 40%;
}

.zone3 {
  background-color: rgba(244, 67, 54, 0.7);
  width: 120px;
  height: 120px;
  top: 15%;
  right: 15%;
}

.zone4 {
  background-color: rgba(244, 67, 54, 0.8);
  width: 130px;
  height: 130px;
  bottom: 15%;
  right: 18%;
}

.zone5 {
  background-color: rgba(255, 152, 0, 0.7);
  width: 90px;
  height: 90px;
  bottom: 20%;
  left: 35%;
}

.zone6 {
  background-color: rgba(255, 152, 0, 0.6);
  width: 100px;
  height: 100px;
  top: 55%;
  left: 15%;
}

.zone7 {
  background-color: rgba(244, 67, 54, 0.7);
  width: 110px;
  height: 110px;
  top: 45%;
  right: 25%;
}

.legend {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: #000000;
}

.legend-color {
  width: 15px;
  height: 15px;
  border-radius: 3px;
}

.legend-color.low {
  background-color: rgba(255, 235, 59, 0.7);
}

.legend-color.medium {
  background-color: rgba(255, 152, 0, 0.7);
}

.legend-color.high {
  background-color: rgba(244, 67, 54, 0.7);
}
</style> 