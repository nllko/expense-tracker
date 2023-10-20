<script>
import BudgetBalance from '../components/Budget/BudgetBalance/BudgetBalanceComponent.vue';
export default {
    components: {
        BudgetBalance
    }
}
</script>

<template>
    <div class="bg-zinc-800 w-screen">
        <BudgetBalance class="m-4" />
    </div>
</template>

<style scoped>
.header-text {
    font-size: 40px;
}
</style>