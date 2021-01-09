<template>
  <button 
    :class="[
      'yt-button',
      `yt-button--${type}`,
      `yt-button--${size}`,
      {
        'is-disabled': disabled || loading
      }
    ]"
    :disabled="disabled" 
    @click="handleClick">
    <span class="yt-icon-loading" v-if="loading || isFetching">
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none"></circle>
      </svg>
    </span>
    <span v-if="$slots.default" class="yt-button-text">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'

type IButtonType = PropType<'primary' | 'ghost' | 'text' | 'default'>

export default defineComponent({
  name: 'YtButton',
  props: {
    type: {
      type: String as IButtonType,
      default: 'default'
    },
    size: {
      type: String as PropType<ComponentSize>,
      default: 'large'
    },
    loading: Boolean,
    disabled: Boolean,
    fetch: Function
  },
  setup(props, { emit }) {
    const isFetching = ref(false)
    const handleClick = (e: Event) => {
      if (props.fetch && !isFetching.value) {
        isFetching.value = true
        props.fetch()
          .then(() => {
            isFetching.value = false
          })
          .catch(() => {
            isFetching.value = false
          })
      } else {
        emit('click', e)
      }
    }
    return {
      isFetching,
      handleClick
    }
  }
});
</script>
<style lang="scss">
@import "./index.scss";
</style>
