<script setup>
import { defineProps } from 'vue';

defineProps({
    transactions: Array,
    label: String
})
</script>

<template>
    <div class="pt-2">
        <span class="overflow-x-hidden whitespace-nowrap">{{ label }}</span>
        <ul class="flex flex-col space-y-2">
            <li v-for="transaction in transactions" :key="transaction._id" class="flex items-center overflow-x-scroll whitespace-nowrap pb-2"
                :class="transaction.type === 'expense' ? 'text-red-200' : 'text-green-200'">
                <fa :icon="transaction.type === 'expense' ? 'fa-minus' : 'fa-plus'" class="p-2" />
                <div class="pr-2">
                    <fa icon="fa-eur" />
                    <span class="pl-1">
                        {{ transaction.amount }}
                    </span>
                </div>
                <span>
                    {{ transaction.title }}
                </span>
            </li>
        </ul>
    </div>
</template>