<script>
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
            title: null,
            value: null,
            date: null,
            category: null,
            notes: null
        }
    },
    components: {
        InputText,
        Calendar,
        Dropdown,
        RadioButton,
        InputNumber,
        Textarea,
        Button
    },
    methods: {
        async saveTransaction () {
            const response = await BudgetService.saveTransaction({
                title: this.title,
                value: this.value,
                date: this.date,
                category: this.category,
                notes: this.notes
            })
            console.log(response.data)
        }
    }
}
</script>
<template>
    <div class="flex">
        <div class="flex flex-col w-full">
            <label>Title</label>
            <InputText type="text" class="w-full" v-model="title" />
        </div>
    </div>
    <div class="flex pt-4 justify-between">
        <div class="flex flex-col">
            <label>Value</label>
            <div class="flex">
                <InputNumber v-model="value" :maxFractionDigits="2" mode="currency" currency="EUR" locale="de-DE" />
                <div class="flex flex-col pl-4 justify-between">
                    <div class="flex items-center">
                        <RadioButton />
                        <label>Expense</label>
                    </div>
                    <div class="flex items-center">
                        <RadioButton />
                        <label>Income</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <label>Date</label>
            <Calendar v-model="date" />
        </div>
    </div>
    <div class="flex flex-col">
        <label>Category</label>
        <Dropdown v-model="category" />
    </div>
    <div class="flex flex-col">
        <label>Notes</label>
        <Textarea v-model="notes" />
    </div>
    <div class="flex justify-end pt-4">
        <Button icon="pi pi-check" label="Save" @click="saveTransaction()" />
    </div>
</template>