<script>
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber'
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import RadioButton from 'primevue/radiobutton';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import BudgetService from '@/services/BudgetService'

export default {
    data() {
        return {
            formData: null
        }
    },
    props: {
        visible: Boolean
    },
    computed: {
        computedVisible: {
            get() {
                return this.visible
            },
            set(value) {
                this.$emit('close-dialog', value);
            }
        }
    },
    components: {
        Dialog,
        InputText,
        Calendar,
        Dropdown,
        RadioButton,
        InputNumber,
        Textarea,
        Button
    },
    methods: {
        initFormData() {
            this.formData = {
                title: null,
                value: null,
                date: new Date,
                category: null,
                notes: null,
                type: 'income'
            }
        },
        async saveTransaction() {
            const data = this.formData;
            await BudgetService.saveTransaction(data);
            this.computedVisible = false;
            this.$emit('update-transactions')
        }
    },
    updated() {
        this.initFormData();
    }
}
</script>
<template>
    <Dialog v-model:visible="computedVisible" modal header="Transaction" :style="{ width: '35vw' }">
        <div class="flex">
            <div class="flex flex-col w-full">
                <label>Title</label>
                <InputText type="text" class="w-full" v-model="formData.title" />
            </div>
        </div>
        <div class="flex pt-4 justify-between">
            <div class="flex flex-col">
                <label>Value</label>
                <div class="flex">
                    <InputNumber v-model="formData.value" :maxFractionDigits="2" mode="currency" currency="EUR"
                        locale="de-DE" />
                    <div class="flex flex-col pl-4 justify-between">
                        <div class="flex items-center">
                            <RadioButton v-model="formData.type" value="expense" />
                            <label>Expense</label>
                        </div>
                        <div class="flex items-center">
                            <RadioButton v-model="formData.type" value="income" />
                            <label>Income</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col">
                <label>Date</label>
                <Calendar v-model="formData.date" dateFormat="dd/mm/yy" showIcon />
            </div>
        </div>
        <div class="flex flex-col">
            <label>Category</label>
            <Dropdown v-model="formData.category" />
        </div>
        <div class="flex flex-col">
            <label>Notes</label>
            <Textarea v-model="formData.notes" />
        </div>

        <template #footer>
            <Button icon="pi pi-check" label="Save" @click="saveTransaction" />
        </template>
    </Dialog>
</template>