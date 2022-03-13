<template>
  <button :class="{ btn: true, border: true, onDark }">
    <slot />
  </button>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{ onDark: boolean }>(), {
  onDark: false,
});
</script>

<style lang="scss" scoped>
.btn {
  transition: 200ms;
  font-size: var(--el-font-size-medium);
  padding: 10px 20px;
  color: var(--el-color-primary);
  background-color: unset;

  &.border {
    border: var(--el-color-primary) solid 1px;
    border-radius: 10px;

    &.onDark {
      border-color: var(--vt-c-white-mute);

      &:hover {
        border-color: var(--vt-c-white);
      }
    }

    &:hover {
      border-color: var(--el-color-primary-light-5);
    }
  }

  &.onDark {
    color: var(--vt-c-white-mute);

    &:hover {
      color: var(--vt-c-white);
      background-color: #ffffff20;
    }
  }

  &:hover {
    color: var(--el-color-primary-light-2);
  }
}
</style>
