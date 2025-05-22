<template>
  <div class="persistent-sidebar" :class="{ 'collapsed': collapsed }">
    <div class="logo-container">
      <h2 v-if="!collapsed">Dashboard</h2>
      <div v-else class="logo-icon">P</div>
    </div>
    
    <div class="sidebar-content">
      <div class="nav-section">
        <div class="section-title" v-if="!collapsed">Navegación</div>
        
        <router-link 
          v-for="(item, index) in appPages" 
          :key="index"
          :to="item.url"
          custom
          v-slot="{ navigate, isActive }"
        >
          <div 
            @click="navigate" 
            class="nav-item"
            :class="{ 'active': isActive }"
            :title="collapsed ? item.title : ''"
          >
            <ion-icon :icon="item.icon"></ion-icon>
            <span v-if="!collapsed">{{ item.title }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { IonIcon } from '@ionic/vue';
import { analyticsOutline, desktopOutline, statsChartOutline } from 'ionicons/icons';

const props = defineProps({
  collapsed: {
    type: Boolean,
    default: false
  }
});

const route = useRoute();
const selectedPath = computed(() => route.path);
const none = "none";

const appPages = ref([
  {
    title: 'Negocio',
    url: '/negocio',
    icon: analyticsOutline
  },
  {
    title: 'Técnica',
    url: '/tecnico',
    icon: desktopOutline
  },
  {
    title: 'KPIs',
    url: '/kpis',
    icon: statsChartOutline
  }
]);
</script>

<style scoped>
:root {
  --pitch-green: #4ade80;
  --pitch-dark: #22c55e;
  --stadium-blue: #f8fafc;
  --stadium-dark: #f1f5f9;
  --text-dark: rgba(15, 23, 42, 0.9);
  --accent-gold: #f59e0b;
  --text-light: #1e293b;
  --text-muted: #64748b;
  --shadow-color: rgba(0, 0, 0, 0.08);
}

.persistent-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: var(--sidebar-width, 260px);
  height: 100vh;
  background: var(--stadium-blue);
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 5px 0 25px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background-image: 
    linear-gradient(to bottom, rgba(248, 250, 252, 0.97), rgba(241, 245, 249, 0.98)),
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><path d="M30,5 L39,21 L57,25 L44,38 L47,57 L30,49 L13,57 L16,38 L3,25 L21,21 Z" stroke="rgba(0,0,0,0.03)" fill="none" /></svg>');
  background-size: 120px;
  background-repeat: repeat;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

/* Collapsed sidebar styles */
.persistent-sidebar.collapsed {
  width: var(--sidebar-width-collapsed, 70px);
  overflow: visible;
}

.logo-container {
  padding: 28px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, rgba(248, 250, 252, 1), rgba(248, 250, 252, 0.8));
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
}

.logo-container::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--pitch-green), transparent);
  opacity: 0.5;
}

.persistent-sidebar.collapsed .logo-container {
  padding: 28px 10px;
  justify-content: center;
}

.logo-icon {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 800;
  background: linear-gradient(135deg, var(--pitch-dark), var(--pitch-green));
  color: white;
  box-shadow: 0 4px 10px rgba(34, 197, 94, 0.2), inset 0 2px 5px rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.logo-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4) 0%, transparent 20%),
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42"><path d="M21,1 L27,14 L42,16 L32,26 L34,41 L21,34 L8,41 L10,26 L0,16 L15,14 Z" stroke="rgba(255,255,255,0.25)" stroke-width="0.5" fill="none" /><path d="M21,8 L24,16 L33,17 L27,23 L29,32 L21,28 L13,32 L15,23 L9,17 L18,16 Z" stroke="rgba(255,255,255,0.2)" stroke-width="0.3" fill="none" /></svg>');
  background-size: 100%;
  opacity: 0.8;
}

.logo-container h2 {
  margin: 0 0 0 12px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: var(--text-light);
  position: relative;
  z-index: 1;
}

.logo-container h2::after {
  content: '';
  position: absolute;
  width: 30%;
  height: 3px;
  background: linear-gradient(to right, var(--pitch-green), transparent);
  bottom: -6px;
  left: 0;
  border-radius: 3px;
}

.sidebar-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px 0;
  scrollbar-width: thin;
  scrollbar-color: var(--pitch-green) transparent;
}

.sidebar-content::-webkit-scrollbar {
  width: 4px;
}

.sidebar-content::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar-content::-webkit-scrollbar-thumb {
  background-color: var(--pitch-green);
  border-radius: 20px;
}

.nav-section {
  padding: 0 15px;
}

.persistent-sidebar.collapsed .nav-section {
  padding: 0 10px;
}

.section-title {
  font-size: 11px;
  text-transform: uppercase;
  color: var(--accent-gold);
  letter-spacing: 1px;
  font-weight: 600;
  padding: 0 8px;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
}

.section-title::before {
  content: '';
  width: 15px;
  height: 2px;
  background: var(--accent-gold);
  margin-right: 8px;
  border-radius: 1px;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 13px 15px;
  margin-bottom: 5px;
  color: var(--text-muted);
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}

.persistent-sidebar.collapsed .nav-item {
  padding: 13px 0;
  justify-content: center;
}

.nav-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(74, 222, 128, 0.08), transparent);
  transition: all 0.5s ease;
}

.nav-item:hover::before {
  left: 100%;
  transition: all 0.8s ease;
}

.nav-item:hover {
  background-color: rgba(0, 0, 0, 0.02);
  color: var(--text-light);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
  transform: translateY(-1px);
}

.nav-item.active {
  background: linear-gradient(90deg, rgba(74, 222, 128, 0.12), rgba(34, 197, 94, 0.05));
  color: var(--text-light);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}

/* Estilo de campo de fútbol para el elemento activo */
.nav-item.active::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.07;
  background-image: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 4px,
    rgba(0, 0, 0, 0.01) 4px,
    rgba(0, 0, 0, 0.01) 8px
  );
  z-index: 1;
  pointer-events: none;
}

/* Borde izquierdo para el elemento activo */
.nav-item.active {
  border-left: 3px solid var(--pitch-green);
}

.persistent-sidebar.collapsed .nav-item.active {
  border-left: none;
  border-right: 3px solid var(--pitch-green);
}

.nav-item ion-icon {
  font-size: 20px;
  margin-right: 14px;
  flex-shrink: 0;
  color: var(--pitch-dark);
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.nav-item:hover ion-icon {
  transform: translateY(-2px);
  color: var(--pitch-dark);
}

.nav-item.active ion-icon {
  color: var(--accent-gold);
}

.persistent-sidebar.collapsed .nav-item ion-icon {
  margin-right: 0;
  font-size: 22px;
}

.nav-item span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  transition: transform 0.2s ease;
  position: relative;
  z-index: 2;
  margin-left: 2px;
}

.nav-item:hover span {
  transform: translateX(2px);
}

/* Indicador de balón para hover */
.nav-item::after {
  content: '';
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%) scale(0);
  width: 6px;
  height: 6px;
  background-color: var(--pitch-dark);
  border-radius: 50%;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
  z-index: 3;
}

.nav-item:hover::after {
  transform: translateY(-50%) scale(1);
  opacity: 0.7;
}

@media (max-width: 768px) {
  .persistent-sidebar {
    width: var(--sidebar-width-mobile, 220px);
  }
  
  .persistent-sidebar.collapsed {
    width: var(--sidebar-width-collapsed, 70px);
  }
  
  .logo-container {
    padding: 22px 16px;
  }
  
  .nav-item {
    padding: 11px 13px;
  }
  
  .logo-container h2 {
    font-size: 18px;
  }
}
</style> 