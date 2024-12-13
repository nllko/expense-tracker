<script setup>
import TransactionsView from "@/views/TransactionsView.vue";
import {onMounted} from "vue";
import {useTransactionsStore} from "@/stores/TransactionsStore";

const store = useTransactionsStore();

onMounted(() => {
  store.initTransactions();
})
</script>

<template>
  <transactions-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

html, body {
  font-family: 'Roboto', sans-serif;
}

#app {
  font-family: 'Roboto', sans-serif;
  background-color: var(--core);
}
</style>
