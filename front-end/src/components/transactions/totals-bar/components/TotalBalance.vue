<script setup>
import BalanceCard from "@/components/transactions/totals-bar/components/BalanceCard.vue";

const balance = 111.11;
const latest = ["Test", "Test2", "Test3"];
</script>

<template>
  <balance-card title="Total Balance" :balance="balance" :latest="latest"></balance-card>
</template>

<style scoped>

</style>