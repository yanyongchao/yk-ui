<template>
  <div class="x-button">
    <button @click="handleClick">按钮</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'yk-button',
  emits: {
    click: (e) => {
      return true
    }
  },
  setup(props, { emit }) {
    const handleClick = (e: MouseEvent) => {
      emit('click')
    }
    return {
      handleClick
    }
  }
});
</script>
