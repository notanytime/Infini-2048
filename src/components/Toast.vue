<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{ message: string; duration?: number }>()
const emit = defineEmits(['close'])

const visible = ref(true)

onMounted(() => {
  setTimeout(() => {
    visible.value = false
    setTimeout(() => emit('close'), 300)
  }, props.duration || 2000)
})
</script>

<template>
  <div class="toast" :class="{ 'toast-hide': !visible }">
    {{ message }}
  </div>
</template>

<style scoped>
.toast {
  background: rgba(40, 40, 60, 0.95);
  color: #fff;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.8rem;
  border: 1px solid rgba(255,255,255,0.15);
  animation: toastIn 0.3s ease;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.toast-hide {
  opacity: 0;
  transform: translateY(-10px);
}

@keyframes toastIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
