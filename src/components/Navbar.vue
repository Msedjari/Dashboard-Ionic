<template>
  <div class="main-header">
    <div class="navbar-container">
      <div class="navbar-left">
        <ion-icon :icon="menuOutline" class="menu-toggle" @click="toggleSidebar"></ion-icon>
        <ion-icon :icon="homeOutline" class="title-icon"></ion-icon>
        <h2 class="page-title">Dashboard</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IonIcon } from '@ionic/vue';
import { notificationsOutline, personCircleOutline, searchOutline, chevronDownOutline, homeOutline, menuOutline } from 'ionicons/icons';
import { ref, inject, onMounted } from 'vue';

// Use provide/inject pattern for sidebar toggle state
const toggleSidebar = inject('toggleSidebar', () => {});
</script>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: var(--sidebar-width, 260px);
  width: calc(100% - var(--sidebar-width, 260px));
  height: var(--navbar-height, 60px);
  background: #ffffff;
  z-index: 999;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(230, 232, 240, 0.8);
}

/* Add styles for when sidebar is collapsed */
.sidebar-collapsed .main-header {
  left: var(--sidebar-width-collapsed, 70px);
  width: calc(100% - var(--sidebar-width-collapsed, 70px));
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 28px;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.menu-toggle {
  font-size: 20px;
  color: #3a4354;
  margin-right: 16px;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.menu-toggle:hover {
  background-color: #f5f7fa;
  color: #1e293b;
}

.title-icon {
  font-size: 22px;
  color: #1e293b;
  margin-right: 12px;
}

.page-title {
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
  letter-spacing: -0.01em;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-action-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 38px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.nav-action-item:hover {
  background-color: #f5f7fa;
}

.nav-action-item ion-icon {
  font-size: 20px;
  color: #3a4354;
}

.notification-badge {
  position: absolute;
  top: 6px;
  right: 6px;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: #3b82f6;
  border: 2px solid #ffffff;
}

.divider {
  width: 1px;
  height: 28px;
  background-color: #e6e8f0;
  margin: 0 10px;
}

.user-profile {
  display: flex;
  align-items: center;
  width: auto;
  padding: 4px 12px;
  gap: 10px;
  border-radius: 10px;
  transition: all 0.2s ease;
}

.user-profile:hover {
  background-color: #f5f7fa;
}

.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #4f46e5, #6366f1);
  color: white;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 600;
}

.user-profile span {
  font-size: 14px;
  font-weight: 500;
  color: #3a4354;
}

.dropdown-icon {
  font-size: 14px;
  color: #64748b;
}

@media (max-width: 768px) {
  .main-header {
    left: var(--sidebar-width-mobile, 220px);
    width: calc(100% - var(--sidebar-width-mobile, 220px));
  }
  
  .navbar-container {
    padding: 0 18px;
  }
  
  .user-profile span {
    display: none;
  }
}
</style> 