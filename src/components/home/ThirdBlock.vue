<template>
  <div class="white-background">
    <section class="third-block container">
      <h2 class="center title index fit-content">{{ t("title") }}</h2>
      <div>
        <div
          class="flex space-between vertical-center"
          :class="{
            flex: true,
            'space-between': true,
            'vertical-center': true,
            reverse: index % 2 !== 0,
          }"
          v-for="({ name, img }, index) in features"
          :key="index"
        >
          <div class="div1">
            <h3>{{ t(`features.${name}._1`) }}</h3>
            <p>{{ t(`features.${name}._2`) }}</p>
          </div>
          <div class="div2"></div>
          <el-image class="div3" :src="`/img/third/${img}`"></el-image>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { ElImage } from "element-plus";

const { t } = useI18n({
  messages: {
    en: {
      title: "A better life is our wish.",
      features: {
        teach: {
          _1: "Everyone is a expert in his field, so we help each other by teaching each other.",
          _2:
            "In Foxstack Club, you may request help for a puzzle in your work, learning a new skill, or just a new work opportunity; " +
            "you may also offer help by writing a guide, texting in slack, to make the others' life easier.",
        },
        activity: {
          _1: "Participating in the activities to have fun.",
          _2:
            "There are diverse activities in Foxstack Club, from tech meeting to offline party. " +
            "Besides it, we also have a minecraft server for minecraft gamers to have fun when they are not working.",
        },
        geek: {
          _1: "Around with people who love coding.",
          _2:
            "We are true lover of coding, tech otakus that have a dream of build a exciting world. There must be" +
            "lots of fun to communicate with each other.",
        },
      },
    },
    "zh-CN": { title: "更好的生活是我们的愿望。" },
  },
});

const features = [
  {
    img: "b1.svg",
    name: "teach",
  },
  {
    img: "b2.svg",
    name: "activity",
  },
  {
    img: "b3.svg",
    name: "geek",
  },
];
</script>

<style scoped>
.third-block {
}

.div1 {
  flex: 3;
}

.div1 h3 {
  margin-block-end: 1.5rem;
}

.div2 {
  flex: 1;
}

.div3 {
  flex: 2;
}
</style>
