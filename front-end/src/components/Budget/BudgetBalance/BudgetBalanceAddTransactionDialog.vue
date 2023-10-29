<script setup>
import { ref, onUpdated, defineProps, defineEmits, computed, onMounted, reactive } from 'vue';
import BudgetStore from '@/stores/budgetBalanceStore'
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber'
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import RadioButton from 'primevue/radiobutton';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import BudgetService from '@/services/BudgetService'
import CategoriesService from '@/services/CategoriesService';
import rules from '../../../validation/AddTransactionFormRules';
import useVuelidate from '@vuelidate/core';

const props = defineProps({
    visible: Boolean,
    selectedDate: Date
})

const initialFormState = {
    title: null,
    amount: null,
    date: new Date(),
    category: null,
    notes: null,
    type: 'income',
}
const formData = reactive({});

const expenseCategories = ref();
const incomeCategories = ref();
const emit = defineEmits(['close-dialog']);
let v$;

const computedVisible = computed({
    get() {
        return props.visible;
    },
    set(value) {
        emit('close-dialog', value);
    }
})

const saveTransaction = async () => {
    const validationSuccessful = await v$.value.$validate();

    if (validationSuccessful) {
        await BudgetService.saveTransaction(formData).then(() => {
            computedVisible.value = false;
            BudgetStore.commit('updateStore', props.selectedDate);
        });
    }
};

const resetForm = () => {
    Object.assign(formData, initialFormState);
    v$ = useVuelidate(rules, formData);
}

const initCategories = async () => {
    const categories = (await CategoriesService.getCategories()).data;
    expenseCategories.value = categories.expenseCategories;
    incomeCategories.value = categories.incomeCategories;
}

onMounted(() => {
    initCategories();
})

onUpdated(() => {
    resetForm();
})
</script>
<template>
    <Dialog v-model:visible="computedVisible" modal header="Transaction">
        <div class="flex justify-between pb-4">
            <div class="flex flex-col">
                <label>Title</label>
                <InputText type="text" v-model="formData.title" :class="{ 'p-invalid': v$.title.$error }" />
                <p v-for="error of v$.title.$errors" v-bind:key="error.$uid" class="text-red-500">{{ error.$message }}</p>
            </div>

            <div class="flex flex-col pl-4">
                <label>Date</label>
                <Calendar v-model="formData.date" dateFormat="dd/mm/yy" showIcon :class="{ 'p-invalid': v$.date.$error }" :maxDate="new Date()"/>
                <p v-for="error of v$.date.$errors" v-bind:key="error.$uid" class="text-red-500">{{ error.$message }}</p>
            </div>
        </div>
        <hr class="border-zinc-700">
        <div class="flex justify-between items-center pt-2 pb-4">
            <div class="flex flex-col">
                <label>Amount</label>
                <InputNumber v-model="formData.amount" :min="0" :maxFractionDigits="2" mode="currency" currency="EUR"
                    locale="de-DE" :class="{ 'p-invalid': v$.amount.$error }" />
                <p v-for="error of v$.amount.$errors" v-bind:key="error.$uid" class="text-red-500">{{ error.$message }}</p>
            </div>
            <div class="flex justify-between items-center pr-5">
                <div class="flex flex-col items-center pr-4">
                    <label>Expense</label>
                    <RadioButton v-model="formData.type" value="expense" />
                </div>
                <div class="flex flex-col items-center">
                    <label>Income</label>
                    <RadioButton v-model="formData.type" value="income" />
                </div>
            </div>

        </div>
        <hr class="border-zinc-700">
        <div class="flex flex-col pt-2 pb-4">
            <label>Category</label>
            <Dropdown v-model="formData.category"
                :options="formData.type === 'expense' ? expenseCategories : incomeCategories" optionLabel="name"
                placeholder="Select a Category" :class="{ 'p-invalid': v$.category.$error }" />
            <p v-for="error of v$.category.$errors" v-bind:key="error.$uid" class="text-red-500">{{ error.$message }}</p>
        </div>
        <hr class="border-zinc-700">
        <div class="flex flex-col pt-2">
            <label>Notes</label>
            <Textarea v-model="formData.notes" :class="{ 'p-invalid': v$.notes.$error }" />
            <p v-for="error of v$.notes.$errors" v-bind:key="error.$uid" class="text-red-500">{{ error.$message }}</p>
        </div>

        <template #footer>
            <Button icon="pi pi-check" label="Save" @click="saveTransaction" />
        </template>
    </Dialog>
</template>

<style lang="scss" scoped>
.p-inputnumber,
.p-calendar,
.p-inputtext {
    height: 3rem;
}

.p-inputtext {
    width: 14rem;

    &.p-inputtextarea {
        height: auto;
        width: auto;
    }
}

.p-calendar {
    width: 11rem;
}
</style>