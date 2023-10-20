<script>
import Card from 'primevue/card';

export default {
    data() {
        return {
            balance: 123.45
        }
    },
    components: {
        Card
    }
}
</script>
<template>
    <Card class="w-64">
        <template #title>
            <div class="flex items-center justify-between">
                <span>Balance</span>
                <button class="flex items-center justify-center">
                    <fa icon="angles-right" class="text-green-500 hover:text-green-300 p-2" />
                </button>
            </div>
            <div class="flex items-center" :class="balance > 0 ? 'text-green-200' : 'text-red-200'">
                <fa icon="fa-eur" />
                <span class="pl-4">{{ balance }}</span>
            </div>
        </template>
        <template #content>
            <span>Latest Transactions :</span>
            <ul class="flex flex-col space-y-2">
                <li class="flex items-center text-red-200">
                    <fa icon="fa-minus" class="p-2" />
                    <fa icon="fa-eur" class="pr-2" />
                    <span>350 Car repairs</span>
                </li>
                <li class="flex items-center text-green-200">
                    <fa icon="fa-plus" class="p-2" />
                    <fa icon="fa-eur" class="pr-2" />
                    <span>1500 Sallary</span>
                </li>
                <li class="flex items-center text-green-200">
                    <fa icon="fa-plus" class="p-2" />
                    <fa icon="fa-eur" class="pr-2" />
                    <span>100 Grandma</span>
                </li>
            </ul>
        </template>
    </Card>
</template>