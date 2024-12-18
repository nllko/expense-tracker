<script setup>
import CommonCard from "@/components/common/CommonCard.vue";

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
      <div class="text-xl pt-1" :class="balance > 0 ? 'text-green' : 'text-red'">
        {{ balance }}
      </div>
    </template>
    <template #content>
      <ul>
        <li v-for="(transaction, index) in latest" :key="index">
          {{ transaction }}
        </li>
      </ul>
    </template>
  </common-card>
</template>

<style scoped>

</style>