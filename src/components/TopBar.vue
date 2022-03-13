<template>
  <el-header
    :class="[
      `header`,
      `fixed`,
      `full-width`,
      transparent ? `white-text` : `no-trans`,
    ]"
    style="z-index: 1"
    height="80px"
  >
    <div class="container flex space-between full-height">
      <div class="flex vertical-center">
        <RouterLink to="/" class="reset-link">
          <span class="logo bold">{{ t("logoText") }}</span>
        </RouterLink>
        <span class="nav"></span>
      </div>
      <div class="flex vertical-center btn-area gap-12">
        <Button :on-dark="transparent" @click="$router.push('/apply')">
          {{ t("btn.join") }}
        </Button>
        <SelectorButton
          :options="languages"
          :onOptionClick="onLangClick"
          :closeWhenClickOption="true"
        >
          <template #default>
            <span class="material-icons-outlined">language</span>
          </template>
          <template #item="props">
            {{ t(`lang.${props.item}`) }}
          </template>
        </SelectorButton>
      </div>
    </div>
  </el-header>
</template>

<script lang="ts" setup>
import { ElHeader } from "element-plus";
import { useI18n } from "vue-i18n";
import SelectorButton from "@/components/SelectorButton.vue";
import Button from "@/components/Button.vue";

defineProps<{ transparent: boolean }>();

const { t, locale } = useI18n({
  messages: {
    en: {
      logoText: "Foxstack Club",
      btn: {
        join: "Apply for membership",
      },
      lang: {
        en: "English",
        "zh-CN": "简体中文",
      },
    },
    "zh-CN": {
      logoText: "狐社",
      btn: {
        join: "申请加入",
      },
    },
  },
});

const languages = ["en"];

function onLangClick(lang: string) {
  locale.value = lang;
}
</script>

<style scoped>
.header {
  transition: 200ms;
}

.no-trans {
  background-color: var(--vt-c-white);
  border-bottom: var(--el-border-base);
}
</style>
