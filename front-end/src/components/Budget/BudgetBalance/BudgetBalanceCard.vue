<script>
import Card from 'primevue/card';
import LatesTransactionList from './LatestTransactions/LatestTransactionsList.vue'

export default {
    props: {
        title: String,
        subTitle: String,
        value: Number,
        latestTransactions: Array
    },
    components: {
        Card,
        LatesTransactionList
    }
}
</script>

<template>
    <Card class="w-fit">
        <template #title>
            <div class="flex items-center justify-between">
                <span>{{ title }}</span>
            </div>
            <div class="flex items-center justify-between" :class="value > 0 ? 'text-green-200' : 'text-red-200'">
                <div>
                    <fa icon="fa-eur" />
                    <span class="pl-4">{{ value }}</span>
                </div>
            </div>
        </template>
        <template #content>
            <LatesTransactionList :transactions="latestTransactions" :label="subTitle" />
        </template>
    </Card>
</template>