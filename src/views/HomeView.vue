<template>
  <MainBlock></MainBlock>
  <ProjectsBlock></ProjectsBlock>
  <ThirdBlock></ThirdBlock>
  <RequirementBlock></RequirementBlock>
  <JoinBlock></JoinBlock>
</template>

<script lang="ts" setup>
import MainBlock from "@/components/home/MainBlock.vue";
import ProjectsBlock from "@/components/home/ProjectsBlock.vue";
import ThirdBlock from "@/components/home/ThirdBlock.vue";
import RequirementBlock from "@/components/home/RequirementBlock.vue";
import JoinBlock from "@/components/home/JoinBlock.vue";
</script>

<style scoped>
.a1 {
  overflow: scroll;
  height: 100vh;
  overflow-x: hidden;
}

.a1::-webkit-scrollbar {
  display: none;
}
</style>
