<template>
  <section class="join-block white-background">
    <el-card class="center join-card" shadow="never">
      <h3 class="card-title white-text">{{ t("title") }}</h3>
      <div class="flex btn-area">
        <Button on-dark @click="$router.push('/apply')">{{ t("btn") }}</Button>
      </div>
    </el-card>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import Button from "@/components/Button.vue";

const { t } = useI18n({
  messages: {
    en: {
      title: "Join us now.",
      btn: "Apply for membership",
    },
  },
});
</script>

<style scoped>
.join-block {
  padding-top: 8rem;
  padding-bottom: 8rem;
}

.join-card {
  border: unset;
  max-width: 900px;
  background: url("/img/main-background.jpg");
  background-size: cover;
  padding: 36px;
  border-radius: 16px;
}

.card-title {
  font-size: 30px;
}

.btn-area {
  flex-direction: row-reverse;
  margin-top: 3rem;
}
</style>
