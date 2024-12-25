<script setup>
import CommonCard from "@/components/common/CommonCard.vue";

const getTextColor = (amount) => amount > 0 ? 'text-green' : 'text-red'

defineProps({
  title: String,
  balance: Number,
  latest: Array,
})
</script>

<template>
  <common-card>
    <template #title>
      <div class="text-2xl">{{ title }}</div>
    </template>
    <template #sub-title>
      <div class="text-xl pt-1" :class="getTextColor(balance)">
        {{ balance }}
      </div>
    </template>
    <template #content>
      <div>Latest transactions : </div>
      <ul>
        <li v-for="(transaction, index) in latest" :key="index" :class="getTextColor(transaction.amount)">
          {{ transaction.amount }}
          {{ transaction.name }}
        </li>
      </ul>
    </template>
  </common-card>
</template>

<style scoped>

</style>