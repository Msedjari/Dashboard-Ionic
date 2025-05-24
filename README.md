# Dashboard de Fútbol

## 📊 Descripción
Dashboard interactivo que visualiza métricas y estadísticas del fútbol, combinando datos de negocio y técnicos. El proyecto utiliza Vue.js con Ionic para crear una interfaz moderna y responsiva.

## 🚀 Características Principales

### Indicadores de Negocio
- **Goles en La Liga**: Visualización de goles marcados y recibidos por los principales equipos
- **Evolución de Puntos**: Seguimiento de la clasificación de los equipos líderes
- **Asistencia a Estadios**: Estadísticas de asistencia en los principales estadios
- **Champions League**: Distribución de títulos por país

### Indicadores Técnicos
- **Tiempos de Carga**: Análisis de rendimiento por página
- **Rendimiento API**: Monitoreo de endpoints y tiempos de respuesta
- **Uso de Recursos**: Métricas de sistema y consumo
- **Métricas del Sistema**: Indicadores de rendimiento en tiempo real
- **Distribución de Recursos**: Análisis de uso de CPU y memoria
- **Mapa de Calor**: Visualización de actividad en el estadio

## 🛠️ Tecnologías Utilizadas

- **Frontend**:
  - Vue.js 3
  - Ionic Framework 8
  - TypeScript
  - Vite como bundler
  - Múltiples librerías de gráficos:
    - Chart.js
    - ECharts
    - ApexCharts

- **Testing**:
  - Cypress para pruebas E2E
  - Vitest para pruebas unitarias
  - Vue Test Utils

- **Estilos**:
  - CSS3 con variables personalizadas
  - Diseño responsivo
  - Grid y Flexbox

## 📦 Estructura del Proyecto

```
src/
├── components/     # Componentes reutilizables
├── data/          # Datos y configuraciones
├── views/         # Vistas principales
├── router/        # Configuración de rutas
├── theme/         # Estilos y temas
├── main.ts        # Punto de entrada
└── App.vue        # Componente raíz
```

## 🎨 Diseño

El dashboard está diseñado con un enfoque en la usabilidad y la experiencia del usuario:

- **Layout**: Diseño en grid con 3 columnas en desktop
- **Responsive**: Adaptación automática a tablet (2 columnas) y móvil (1 columna)
- **Temas**: Soporte para modo claro/oscuro
- **Interactividad**: Animaciones suaves y efectos hover
- **Accesibilidad**: Contraste adecuado y estructura semántica

## 📱 Características Responsivas

- **Desktop**: 3 KPIs por fila
- **Tablet**: 2 KPIs por fila
- **Móvil**: 1 KPI por fila
- **Espaciado adaptativo**: Márgenes y padding optimizados para cada dispositivo

## 🚀 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/Msedjari/Dashboard-Ionic
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
ionic serve
```

## 📈 Rendimiento

El dashboard está optimizado para:
- Carga rápida de componentes
- Actualización eficiente de datos
- Rendimiento óptimo en dispositivos móviles
- Uso eficiente de recursos del sistema

## 🔧 Configuración

El proyecto utiliza:
- TypeScript para tipado estático
- ESLint para linting
- Capacitor para funcionalidades nativas
- Vite para desarrollo y build

## 📝 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run preview`: Previsualiza la build de producción


Desarrollado con ❤️ por Mouad Sedjari 
