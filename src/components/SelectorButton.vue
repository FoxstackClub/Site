<template>
  <div ref="container" @blur="onBlur" tabindex="-1">
    <button class="btn-text mute" @click="clickButton" ref="button">
      <slot />
    </button>
    <transition>
      <div class="selector" v-show="display" ref="selector">
        <div class="triangle"></div>
        <div
          v-for="item in options"
          :key="item"
          class="option clickable"
          @click="clickOption(item)"
        >
          <slot :item="item" name="item"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps<{
  options: string[];
  onOptionClick: (item: string) => void;
  closeWhenClickOption: boolean;
}>();
const display = ref(false);
const button = ref(null as null | Element);
const selector = ref(null as null | HTMLDivElement);
const container = ref(null as null | HTMLDivElement);

function focus() {
  (container.value as HTMLDivElement).focus();
}

function clickButton() {
  display.value = !display.value;
  if (display.value && container.value) {
    setTimeout(focus, 0);
  }
}

function onBlur() {
  setTimeout(() => {
    if (document.activeElement !== button.value) display.value = false;
  }, 0);
}

function clickOption(item: string) {
  if (props.closeWhenClickOption) display.value = false;
  props.onOptionClick(item);
}
</script>

<style scoped>
.btn-text {
  padding: 10px 0px;
  border: unset;
  top: 2px;
  position: relative;
  background-color: unset;
  transition: 200ms;
}

.selector {
  position: absolute;
  width: 100px;
  top: calc(100% + 5px);
  left: 50%;
  transform: translate(-50%);
  background-color: white;
  color: var(--vt-c-black);
  border-radius: 4px;
  padding-top: 5px;
  padding-bottom: 5px;
  transition: 500ms;
}

.triangle {
  position: absolute;
  width: 26px;
  height: 16px;
  transform: rotate(45deg) translate(-50%);
  padding: unset !important;
  left: 50%;
  top: 10px;
  background-color: white;
}

.option {
  padding: 15px 20px;
  transition: 500ms;
}

.selector div:hover {
  color: var(--el-color-primary);
  background-color: var(--el-color-primary-light-9);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translate(-50%, -10%);
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}
</style>
