<template>
  <section class="project-block soft-background">
    <h2 class="center title index fit-content">{{ t("title") }}</h2>
    <div>
      <el-card
        class="pane center"
        shadow="never"
        v-for="project in projects"
        :key="project.en.name"
      >
        <h3 class="project-title">
          <span>{{ project[locale].name }}</span>
          <span class="info">{{ `In ${project.status}` }}</span>
        </h3>
        <p class="manager info">{{ `${t("manager")}` }}{{ project.manager }}</p>
        <p class="text description">{{ project[locale].description }}</p>
      </el-card>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ElTabs, ElTabPane, ElCard } from "element-plus";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n({
  messages: {
    en: {
      title: "We incubate projects.",
      manager: "Manager: ",
    },
    "zh-CN": {
      title: "我们孵化项目。",
      manager: "负责人：",
    },
  },
});

console.log(locale.value);

enum ProjectStatus {
  Prototype = "Prototyping",
  Coding = "Coding",
  Released = "Released",
}

const projects = [
  {
    en: {
      name: "Girls' Frontline: Tactical Command",
      description:
        "A RTS fan game of Girls' Frontline involves tactical command. In this game, player plays as a officer of tactical command, join in the war between G&K and Sangvis Ferri, and leads T-dolls to victory.",
    },
    "zh-CN": {
      name: "少女前线：战术指挥",
      description:
        "一款《少女前线》的即时战术同人游戏。在这个游戏里，玩家扮演一名格里芬的战术指挥官，参与到格里芬和铁血工造的战争中，带领战术人形们夺取胜利。",
    },
    manager: "Laios",
    status: ProjectStatus.Coding,
  },
  {
    en: {
      name: "Foxstack Typescript Standard",
      description:
        "For a long time, there are many APIs function roughly same but have different interface among different " +
        "platform (mainly browser and nodejs), for example the buffer api. As a result of it, we have to use " +
        "browserify or fake dom to make some packages work in the specific platform, which heavily increase the " +
        "complexity of our build toolchain. Worse yet, our application will be bugful just because of a hidden incompatible " +
        "dependency. To solve this problem, we'd like to propose a standard (with correspond std library code) just " +
        "like .NET Standard.",
    },
    "zh-CN": {
      name: "Foxstack Typescript Standard",
      description:
        "For a long time, there are many APIs function roughly same but have different interface among different " +
        "platform (mainly browser and nodejs), for example the buffer api. As a result of it, we have to use " +
        "browserify or fake dom to make some packages work in the specific platform, which heavily increase the " +
        "complexity of our build toolchain. Worse yet, our application will be bugful just because of a hidden incompatible " +
        "dependency. To solve this problem, we'd like to propose a standard (with correspond std library code) just " +
        "like .NET Standard.",
    },
    manager: "Errethakbe",
    status: ProjectStatus.Prototype,
  },
];
</script>

<style scoped>
.project-block {
  padding-bottom: 10rem;
}

.pane {
  max-width: 1000px;
  min-height: 250px;
}

.pane + .pane {
  margin-top: var(--large-gap);
}

.text {
  margin-block-start: 1rem;
}

.project-title {
  display: flex;
  justify-content: space-between;
}

.title {
  margin-block-start: unset;
}
</style>
