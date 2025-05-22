<template>
  <div class="kpis-view">
    <div class="dashboard-container">
      <!-- Sección de Negocio -->
      <div class="section">
        <h2 class="section-title business-title">Indicadores de Negocio</h2>
        <div class="charts-container">
          <!-- RevenueBarChart -->
          <div class="chart-card">
            <div class="chart-header">
              <h3>Goles en La Liga (RevenueBarChart)</h3>
            </div>
            <div class="chart-content">
              <div class="chart-description">
                <h4>Gráfico de Barras</h4>
                <p>Muestra la comparación de goles marcados y recibidos por los principales equipos de La Liga en la temporada 2023-2024.</p>
                <p>Métricas clave:</p>
                <ul>
                  <li>Real Madrid: 89 goles marcados, 28 recibidos</li>
                  <li>Barcelona: 85 goles marcados, 44 recibidos</li>
                  <li>Atlético: 72 goles marcados, 42 recibidos</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- SalesLineChart -->
          <div class="chart-card">
            <div class="chart-header">
              <h3>Evolución de Puntos (SalesLineChart)</h3>
            </div>
            <div class="chart-content">
              <div class="chart-description">
                <h4>Gráfico de Líneas</h4>
                <p>Visualiza la evolución de puntos de los tres principales equipos durante las últimas jornadas de la temporada.</p>
                <p>Métricas clave:</p>
                <ul>
                  <li>Real Madrid: 99 puntos finales</li>
                  <li>FC Barcelona: 88 puntos finales</li>
                  <li>Atlético de Madrid: 79 puntos finales</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- UserGrowthAreaChart -->
          <div class="chart-card">
            <div class="chart-header">
              <h3>Asistencia a Estadios (UserGrowthAreaChart)</h3>
            </div>
            <div class="chart-content">
              <div class="chart-description">
                <h4>Gráfico de Área</h4>
                <p>Muestra la evolución de la asistencia a los principales estadios durante las últimas jornadas.</p>
                <p>Métricas clave:</p>
                <ul>
                  <li>Santiago Bernabéu: 84.000 espectadores promedio</li>
                  <li>Camp Nou: 82.000 espectadores promedio</li>
                  <li>Metropolitano: 71.000 espectadores promedio</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- GeoMapChart -->
          <div class="chart-card">
            <div class="chart-header">
              <h3>Champions League (GeoMapChart)</h3>
            </div>
            <div class="chart-content">
              <div class="chart-description">
                <h4>Gráfico de Donut</h4>
                <p>Muestra la distribución de títulos de la Champions League por país.</p>
                <p>Métricas clave:</p>
                <ul>
                  <li>España: 19 títulos</li>
                  <li>Inglaterra: 14 títulos</li>
                  <li>Italia: 12 títulos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sección Técnica -->
      <div class="section">
        <h2 class="section-title technical-title">Indicadores Técnicos</h2>
        <div class="charts-container">
          <!-- BoxPlotChart -->
          <div class="chart-card">
            <div class="chart-header">
              <h3>Tiempos de Carga (BoxPlotChart)</h3>
            </div>
            <div class="chart-content">
              <div class="chart-description">
                <h4>Gráfico de Cajas</h4>
                <p>Muestra la distribución de tiempos de carga por página en milisegundos.</p>
                <p>Métricas clave:</p>
                <ul>
                  <li>Inicio: 820-1290 ms</li>
                  <li>Tienda: 1200-1500 ms</li>
                  <li>Perfil: 720-890 ms</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- HorizontalBarChart -->
          <div class="chart-card">
            <div class="chart-header">
              <h3>Rendimiento API (HorizontalBarChart)</h3>
            </div>
            <div class="chart-content">
              <div class="chart-description">
                <h4>Gráfico de Barras Horizontales</h4>
                <p>Visualiza los tiempos de respuesta en tiempo real de diferentes endpoints de la API.</p>
                <p>Métricas clave:</p>
                <ul>
                  <li>Login API</li>
                  <li>Estadísticas API</li>
                  <li>Streaming API</li>
                  <li>Datos usuario</li>
                  <li>Partidos API</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- BubbleChart -->
          <div class="chart-card">
            <div class="chart-header">
              <h3>Uso de Recursos (BubbleChart)</h3>
            </div>
            <div class="chart-content">
              <div class="chart-description">
                <h4>Gráfico de Burbujas</h4>
                <p>Muestra la correlación entre peticiones por segundo, usuarios y tiempo de carga.</p>
                <p>Métricas clave:</p>
                <ul>
                  <li>Peticiones por segundo</li>
                  <li>Número de usuarios</li>
                  <li>Tiempo de carga en ms</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- TechniqueRadarChart -->
          <div class="chart-card">
            <div class="chart-header">
              <h3>Métricas del Sistema (TechniqueRadarChart)</h3>
            </div>
            <div class="chart-content">
              <div class="chart-description">
                <h4>Gráfico de Radar</h4>
                <p>Visualiza múltiples métricas del sistema en tiempo real.</p>
                <p>Métricas clave:</p>
                <ul>
                  <li>Latencia</li>
                  <li>Rendimiento</li>
                  <li>Estabilidad</li>
                  <li>Seguridad</li>
                  <li>Escalabilidad</li>
                  <li>Resiliencia</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- PolarAreaChart -->
          <div class="chart-card">
            <div class="chart-header">
              <h3>Distribución de Recursos (PolarAreaChart)</h3>
            </div>
            <div class="chart-content">
              <div class="chart-description">
                <h4>Gráfico de Área Polar</h4>
                <p>Muestra la distribución del uso de CPU por proceso.</p>
                <p>Métricas clave:</p>
                <ul>
                  <li>Servidor Web: 35%</li>
                  <li>Base de Datos: 25%</li>
                  <li>Caché: 15%</li>
                  <li>APIs: 18%</li>
                  <li>Analíticas: 7%</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- LiveConversionChart -->
          <div class="chart-card">
            <div class="chart-header">
              <h3>Mapa de Calor del Estadio (LiveConversionChart)</h3>
            </div>
            <div class="chart-content">
              <div class="chart-description">
                <h4>Mapa de Calor</h4>
                <p>Visualiza la concentración de actividad en diferentes zonas del campo.</p>
                <p>Métricas clave:</p>
                <ul>
                  <li>Zonas de alta actividad (90%)</li>
                  <li>Zonas de media actividad (45-75%)</li>
                  <li>Zonas de baja actividad (25%)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No se necesitan importaciones ya que eliminamos los componentes de Ionic
</script>

<style scoped>
.kpis-view {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 30px;
  gap: 1.5rem;
  padding: 2rem;
  overflow: auto;
  background-color: var(--ion-color-light-tint, #f7f8fa);
}

.dashboard-container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 1rem;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid;
}

.business-title {
  color: var(--ion-color-primary);
  border-bottom-color: var(--ion-color-primary-tint);
}

.technical-title {
  color: var(--ion-color-tertiary);
  border-bottom-color: var(--ion-color-tertiary-tint);
}

.charts-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;
}

.chart-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: 100%;
  width: 100%;
}

.chart-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.chart-header {
  padding: 1rem 1.25rem;
  background-color: rgba(var(--ion-color-light-rgb), 0.6);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.chart-header h3 {
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0;
  color: var(--ion-color-dark);
}

.chart-content {
  padding: 1.25rem;
  flex: 1;
}

.chart-description h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0.75rem;
  color: var(--ion-color-dark);
}

.chart-description p {
  margin-bottom: 0.75rem;
  color: var(--ion-color-medium);
  line-height: 1.6;
  font-size: 0.95rem;
}

.chart-description ul {
  padding-left: 1.25rem;
  margin-top: 0.5rem;
}

.chart-description li {
  margin-bottom: 0.5rem;
  color: var(--ion-color-medium);
  line-height: 1.5;
  font-size: 0.95rem;
}

/* Tablet layout */
@media (max-width: 1024px) {
  .kpis-view {
    padding: 1rem;
  }
  
  .dashboard-container {
    padding: 0 0.5rem;
  }

  .charts-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
}

/* Mobile layout */
@media (max-width: 768px) {
  .kpis-view {
    padding: 0.75rem;
    gap: 1.25rem;
    height: auto;
    overflow: auto;
  }
  
  .dashboard-container {
    padding: 0 0.25rem;
  }
  
  .charts-container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .section-title {
    font-size: 1.5rem;
  }
}

/* Small mobile devices */
@media (max-width: 480px) {
  .kpis-view {
    padding: 0.5rem;
    gap: 1rem;
  }
  
  .dashboard-container {
    padding: 0;
  }
  
  .chart-header h3 {
    font-size: 1.1rem;
  }
  
  .chart-card {
    border-radius: 10px;
  }

  .section-title {
    font-size: 1.3rem;
  }
}
</style> 