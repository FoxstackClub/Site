<template>
  <section class="requirement-block soft-background">
    <h2 class="center title index fit-content">{{ t("title") }}</h2>
    <div class="container center flex space-between">
      <el-card
        v-for="{ name } in requirements"
        :key="name"
        class="card"
        shadow="never"
      >
        <h3 class="c title">{{ t(`requirements.${name}.title`) }}</h3>
        <p>{{ t(`requirements.${name}.description`) }}</p>
      </el-card>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { ElCard, ElButton } from "element-plus";

const { t } = useI18n({
  messages: {
    en: {
      title: "Who are we looking for?",
      requirements: {
        skill: {
          title: "One skill",
          description:
            "Every member of Foxstack Club has at least one skill in any coding field.",
        },
        workflow: {
          title: "Know modern coding workflow",
          description:
            "This club use modern coding workflow to incubate projects to gain a more productive effect, So you need to know a little about the modern workflow includes several tools such as git, github CI, and so on.",
        },
        geek: {
          title: "Be a tech otaku",
          description:
            "We expect you to be a real tech otaku who is true lover of coding a exciting world. We are passionate about " +
            "using technology to make our own life better, but not surpass others.",
        },
      },
    },
  },
});

const requirements = [
  {
    name: "skill",
  },
  {
    name: "workflow",
  },
  {
    name: "geek",
  },
];
</script>

<style scoped>
.requirement-block {
  padding-top: 5rem;
  padding-bottom: 10rem;
}

.title.index {
  margin-block-start: unset;
}

.card {
  max-width: 350px;
  padding: 24px;
  border: unset;
}

.c.title {
  margin-block-end: 2rem;
}
</style>
