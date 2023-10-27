<script setup>
import { ref, onMounted } from 'vue';
import Card from 'primevue/card';
import AddTransactionDialog from './BudgetBalanceAddTransactionDialog.vue';
import BudgetBalanceCard from './BudgetBalanceCard.vue';
import BudgetService from '@/services/BudgetService';
import Calendar from 'primevue/calendar';

const balance = ref(111.11);
const expenses = ref(-333.33);
const incomes = ref(444.44);
const visible = ref(false);
const expanded = ref(false);
const selectedDate = ref(new Date())
const latestCombined = ref();
const latestExpenses = ref();
const latestIncomes = ref();

const toggleBalanceExpansion = () => {
    expanded.value = !expanded.value;
};

const closeDialog = () => {
    visible.value = false;
};

const isSameDate = () => {
    const date = new Date();
    if (selectedDate.value.getMonth() === date.getMonth() && selectedDate.value.getFullYear() === date.getFullYear()) {
        return true
    } else {
        return false
    }
}

const getDateMonth = () => {
    return selectedDate.value.toLocaleString('default', { month: 'long' });
}

const initTransactions = async () => {
    const dateString = selectedDate.value.toISOString();
    latestCombined.value = (await BudgetService.getLatestTransactions(null, dateString)).data;
    latestExpenses.value = (await BudgetService.getLatestTransactions('expense', dateString)).data;
    latestIncomes.value = (await BudgetService.getLatestTransactions('income', dateString)).data;
};

const onCalendarChange = async () => {
    initTransactions();
}

onMounted(() => {
    initTransactions();
});
</script>
<template>
    <div class="flex h-max">
        <BudgetBalanceCard class="rounded-left" title="Balance"
            :subTitle="isSameDate() ? 'Latest Transactions :' : `${getDateMonth()}'s transactions:`" :value="balance"
            :latestTransactions="latestCombined" />
        <BudgetBalanceCard class="pl-4" v-if="expanded" title="Expenses"
            :subTitle="isSameDate() ? 'Latest Expenses :' : `${getDateMonth()}'s expenses :`" :value="expenses"
            :latestTransactions="latestExpenses" />
        <BudgetBalanceCard class="pl-4" v-if="expanded" title="Incomes"
            :subTitle="isSameDate() ? 'Latest Incomes :' : `${getDateMonth()}'s incomes :`" :value="incomes"
            :latestTransactions="latestIncomes" />
        <Card class="pl-4 w-56 custom-padding" v-if="expanded">
            <template #content>
                <Calendar class="h-64" v-model="selectedDate" view="month" dateFormat="mm/yy" inline :maxDate="new Date()"
                    @date-select="onCalendarChange" />
            </template>
        </Card>
        <Card class="rounded-right">
            <template #title>
                <button class="flex items-center justify-center transition-hover"
                    :class="{ 'translate-right-on-hover': !expanded, 'translate-left-on-hover': expanded }"
                    @click="toggleBalanceExpansion">
                    <fa :icon="expanded ? 'angles-left' : 'angles-right'" class="text-green-500 hover:text-green-300 p-2" />
                </button>
                <button class="flex items-center justify-center transition-hover scale-on-hover" @click="visible = true">
                    <fa icon="fa-plus" class="text-green-500 hover:text-green-300 p-2" />
                </button>
                <AddTransactionDialog :visible="visible" @close-dialog="closeDialog"
                    @update-transactions="initTransactions" />
            </template>
        </Card>
    </div>
</template>

<style lang="scss" scoped>
$border-radius: 6px;
$transition-duration: 0.2s;

.custom-padding {
    ::v-deep(.p-card-body) {
        padding: 0;
    }
}

::v-deep(.p-datepicker-header) {
    padding-top: 0;
    padding-bottom: 0;
}

.p-card {
    box-shadow: none;
    border-radius: 0;
}

.rounded {
    &-left {
        border-top-left-radius: $border-radius;
        border-bottom-left-radius: $border-radius;
    }

    &-right {
        border-top-right-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
    }
}

.transition-hover {
    transition: transform $transition-duration ease-out;
}

.translate {
    &-left-on-hover {
        &:hover {
            transform: translateX(-0.5rem);
        }
    }

    &-right-on-hover {
        &:hover {
            transform: translateX(0.5rem);
        }
    }
}

.scale-on-hover {
    &:hover {
        transform: scale(1.5);
    }
}
</style>