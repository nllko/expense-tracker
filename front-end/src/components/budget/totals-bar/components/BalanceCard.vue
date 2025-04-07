<script setup>
import CommonCard from "@/components/common/CommonCard.vue";
import {FontAwesomeIcon as FaIcon} from "@fortawesome/vue-fontawesome";

const getTextColor = (amount) => amount > 0 ? 'text-green' : 'text-red'

const getIcon = (amount) => amount > 0 ? 'plus' : 'minus'

defineProps({
  title: String,
  subtitle: String,
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
      <div class="flex items-center pt-1" :class="getTextColor(balance)">
        <fa-icon :icon="getIcon(balance)" />
        <div class="text-xl pl-1" >
          {{ Math.abs(balance) }}
        </div>
      </div>
    </template>
    <template #content>
      <div class="mb-1">{{ subtitle }}</div>
      <div v-for="(transaction, index) in latest" :key="index" class="flex">
        <div class="mr-1 flex items-center">
          <fa-icon :icon="getIcon(transaction.amount)" :class="getTextColor(transaction.amount)" />
        </div>
        <div :class="getTextColor(transaction.amount)">
          {{ Math.abs(transaction.amount) }}
          {{ transaction.name }}
        </div>
      </div>
    </template>
  </common-card>
</template>

<style scoped></style>