<template>
  <el-scrollbar
    @scroll="onScroll"
    ref="scrollbar"
    id="scrollbar"
    class="hidden-sm-and-down"
  >
    <el-container class="flex direction-column full-width">
      <TopBar :transparent="transparent"></TopBar>
      <el-main style="--el-main-padding: unset">
        <router-view></router-view>
      </el-main>
      <Footer></Footer>
    </el-container>
  </el-scrollbar>
  <p class="hidden-md-and-up">
    This site is only for desktop browser.<br />
    Mobile version is under coding.
  </p>
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { ElContainer, ElMain, ElScrollbar, ElCard } from "element-plus";
import TopBar from "@/components/TopBar.vue";
import Footer from "@/components/Footer.vue";
import { computed, ref } from "vue";

const scrollbar = ref<InstanceType<typeof ElScrollbar>>();

function onScroll(event: { scrollTop: number }) {
  scrollHeight.value = event.scrollTop;
}

const scrollHeight = ref(0);
const transparent = computed(() => scrollHeight.value <= 100);
</script>

<style scoped></style>
