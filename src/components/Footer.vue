<template>
  <el-footer class="soft-background flex space-between vertical-center footer">
    <span class="info">{{ t("copyright") }}</span>
    <span class="info">
      {{ t("power") }}
      <a href="https://twitter.com/GhislaineLaios">@GhislaineLaios</a>
    </span>
  </el-footer>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { ElFooter } from "element-plus";

const { t } = useI18n({
  messages: {
    en: {
      copyright: "© 2022 Foxstack Club",
      power: "Powered by",
    },
  },
});
</script>

<style scoped></style>
