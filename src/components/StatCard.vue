<template>
  <ion-card class="stat-card" :class="{ 'primary': color === 'primary', 'success': color === 'success', 'warning': color === 'warning', 'danger': color === 'danger' }">
    <div class="card-content">
      <div class="stat-icon">
        <ion-icon :icon="icon" />
      </div>
      <div class="stat-info">
        <h4>{{ title }}</h4>
        <h2>{{ value }}</h2>
      </div>
    </div>
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonIcon } from '@ionic/vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  icon: {
    type: [String, Object],
    required: true
  },
  color: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'success', 'warning', 'danger'].includes(value)
  }
});
</script>

<style scoped>
.stat-card {
  margin: 0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  overflow: hidden;
  height: 100%;
}

.stat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.card-content {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  height: 100%;
}

.stat-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 12px;
  font-size: 24px;
  flex-shrink: 0;
}

.stat-info {
  flex-grow: 1;
}

.stat-info h4 {
  margin: 0 0 8px 0;
  font-size: 14px;
  font-weight: 500;
  color: var(--ion-color-medium);
}

.stat-info h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
}

/* Color variants */
.stat-card.primary .stat-icon {
  background-color: rgba(59, 130, 246, 0.15);
  color: var(--ion-color-primary);
}

.stat-card.success .stat-icon {
  background-color: rgba(54, 211, 153, 0.15);
  color: var(--ion-color-success);
}

.stat-card.warning .stat-icon {
  background-color: rgba(251, 191, 36, 0.15);
  color: var(--ion-color-warning);
}

.stat-card.danger .stat-icon {
  background-color: rgba(248, 113, 113, 0.15);
  color: var(--ion-color-danger);
}

@media (max-width: 768px) {
  .stat-icon {
    width: 46px;
    height: 46px;
    font-size: 20px;
  }

  .stat-info h4 {
    font-size: 12px;
  }

  .stat-info h2 {
    font-size: 18px;
  }
}
</style> 