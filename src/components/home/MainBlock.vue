<template>
  <section class="main-block full-width white-text">
    <img class="background" src="/img/main-background.jpg" />
    <div class="container">
      <div class="fit-content center title-area">
        <p class="title-hint flex space-between">
          <span>{{ t("_1") }}</span>
        </p>
        <h1 class="main-text">{{ t("_3") }}</h1>
      </div>
      <div
        class="fit-content center description-area white-text mute light-text"
      >
        <el-divider class="divider"></el-divider>
        <p class="description">{{ t("description") }}</p>
      </div>
      <div class="hint-area center fit-content">
        <span
          class="material-icons-outlined"
          style="color: var(--vt-c-text-dark-2)"
        >
          keyboard_double_arrow_down
        </span>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { ElDivider } from "element-plus";

const { t } = useI18n({
  messages: {
    en: {
      _1: "We are",
      _2: "tech otaku",
      _3: "An association works for something really cool.",
      description: "We use code to build an exciting world.",
    },
    "zh-CN": {
      _1: "我们是",
      _2: "技术宅",
      _3: "一个致力于做一些很酷的事情的社团。",
    },
  },
});
</script>

<style scoped>
.container {
  height: 100vh;
}

.main-block {
  position: relative;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title-area,
.hint-area,
.description-area {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.title-area {
  top: 35%;
}

.main-text {
  font-size: 2.25rem;
  margin-block-start: 1rem;
}

.description-area {
  position: absolute;
  top: 50%;
}

.divider {
  width: 40px;
  margin: auto auto 20px;
}

.hint-area {
  position: absolute;
  bottom: 20px;
}
</style>
