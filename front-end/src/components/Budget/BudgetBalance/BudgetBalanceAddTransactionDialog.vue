<script setup>
import { ref, onUpdated, defineProps, defineEmits, computed } from 'vue';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber'
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import RadioButton from 'primevue/radiobutton';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import BudgetService from '@/services/BudgetService'

const props = defineProps({
    visible: Boolean
})

const formData = ref({});
const emit = defineEmits(['close-dialog']);

const computedVisible = computed({
    get() {
        return props.visible;
    },
    set(value) {
        emit('close-dialog', value);
    }
})

const initFormData = () => {
    formData.value = {
        title: null,
        value: null,
        date: new Date(),
        category: null,
        notes: null,
        type: 'income',
    };
}

const saveTransaction = async () => {
    await BudgetService.saveTransaction(formData.value).then(() => {
        computedVisible.value = false;
        emit('update-transactions');
    });
};

onUpdated(() => {
    initFormData();
})
</script>
<template>
    <Dialog v-model:visible="computedVisible" modal header="Transaction">
        <div class="flex justify-between pb-4">
            <div class="flex flex-col">
                <label>Title</label>
                <InputText type="text" v-model="formData.title" />
            </div>

            <div class="flex flex-col pl-4">
                <label>Date</label>
                <Calendar v-model="formData.date" dateFormat="dd/mm/yy" showIcon />
            </div>
        </div>
        <hr class="border-zinc-700">
        <div class="flex justify-between items-center pt-2 pb-4">
            <div class="flex flex-col">
                <label>Value</label>
                <InputNumber v-model="formData.value" :min="0" :maxFractionDigits="2" mode="currency" currency="EUR"
                    locale="de-DE" />
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
            <Dropdown v-model="formData.category" />
        </div>
        <hr class="border-zinc-700">
        <div class="flex flex-col pt-2">
            <label>Notes</label>
            <Textarea v-model="formData.notes" />
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