<script>
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import AddTransactionForm from './AddTransaction/AddTransactionForm.vue'

export default {
    data() {
        return {
            balance: 123.45,
            visible: true,
        }
    },
    components: {
        Card,
        Dialog,
        AddTransactionForm
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
            <div class="flex items-center justify-between" :class="balance > 0 ? 'text-green-200' : 'text-red-200'">
                <div>
                    <fa icon="fa-eur" />
                    <span class="pl-4">{{ balance }}</span>
                </div>
                <button class="flex items-center justify-center" @click="visible = true">
                    <fa icon="fa-plus" class="text-green-500 hover:text-green-300 p-2" />
                </button>
                <Dialog v-model:visible="visible" modal header="Transaction" :style="{ width: '35vw' }">
                    <AddTransactionForm />
                </Dialog>
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