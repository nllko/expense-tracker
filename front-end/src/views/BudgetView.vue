<script>
export default {
    data() {
        return {
            balance: 253,
            expenses: 203,
            incomes: 456
        }
    }
}
</script>

<template>
    <div class="bg-zinc-800 w-screen flex flex-col items-center">
        <div class="flex flex-col items-center bg-zinc-700 rounded-md px-4 mt-4">
            <p class="header-text" :class="balance > 0 ? 'text-green-500' : 'text-red-500'">Overall balance</p>
            <div class="flex items-center">
                <div class="header-text text-green-100">{{ balance + '€' }}</div>
            </div>
        </div>

        <div class="flex space-x-4 bg-zinc-700 rounded-lg w-fit p-4 mt-4">
            <div class="flex flex-col items-center bg-zinc-800 rounded-md px-4 w-64">
                <p class="header-text text-red-500">Expenses</p>
                <div class="flex items-center">
                    <div class="header-text text-red-100">{{ expenses + '€' }}</div>
                </div>
            </div>
            <div class="flex flex-col items-center bg-zinc-800 rounded-md px-4 w-64">
                <p class="header-text text-green-500">Incomes</p>
                <div class="flex items-center">
                    <div class="header-text text-green-100">{{ incomes + '€' }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header-text {
    font-size: 40px;
}
</style>