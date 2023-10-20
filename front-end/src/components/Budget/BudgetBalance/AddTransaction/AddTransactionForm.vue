<script>
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber'
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import RadioButton from 'primevue/radiobutton';
import Textarea from 'primevue/textarea';

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
        Textarea
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
</template>