<script setup>
import CommonCard from "@/components/common/CommonCard.vue";
import CurrencyText from "@/components/common/fields/CurrencyText.vue";
defineProps({
  title: String,
  subtitle: String,
  balance: Number,
  latest: Array,
})
</script>

<template>
  <common-card class="w-64">
    <template #title>
      <div class="text-xl p-2">{{ title }}</div>
    </template>
    <template #sub-title>
      <div class="text-container bg-core flex justify-center">
        <div class="p-2">
          <CurrencyText class="font-bold" :balance="balance" />
        </div>
      </div>
    </template>
    <template #content>
      <div class="mb-1">{{ subtitle }}</div>
      <div v-for="(transaction, index) in latest" :key="index" class="flex">
        <CurrencyText class="p-1" :balance="transaction.amount" :name="transaction.name" />
      </div>
    </template>
  </common-card>
</template>

<style scoped>
.text-container {
  border-radius: 6px;
}
</style>