<script setup>
import {ref} from "vue";
import {InputText, Textarea, InputNumber, DatePicker, Dialog, SelectButton, Button, InputGroup, InputGroupAddon} from "primevue";
import {useForm} from "vee-validate";
import * as yup from 'yup';
import FloatingInput from "@/components/common/form/FloatingInput.vue";
import {useBudgetStore} from "@/stores/BudgetStore";

const store = useBudgetStore();

const schema = yup.object({
  name: yup.string().required().label("Name"),
  description: yup.string().optional().label("Description"),
  amount: yup.number().required().notOneOf([0],"Amount can't be 0").label("Amount"),
  type: yup.string().required().label("Type"),
  date: yup.date().required().max(new Date(),"Date can't be in the future").label("Date")
})

const {errors, errorBag, defineField, resetForm, handleSubmit, setFieldValue, values} = useForm({
  validationSchema: schema,
  initialValues: {type: "EXPENSE"}
});

const [name] = defineField("name");
const [description] = defineField("description");
const [amount] = defineField("amount");
const [type] = defineField("type");
const [date] = defineField("date");

const types = ref(
    ["Expense", "Income"].map((type) => ({label: type, value: type.toUpperCase()}))
);

const showModal = ref(false);

const onSubmit = handleSubmit((values) => {
  store.saveTransaction(values).then(() => {
    showModal.value = false;
    resetForm();
  })
});

const onCancel = () => {
  showModal.value = false;
  resetForm();
}

const handleAmount = (value) => {
   value < 0 ? setFieldValue("type","EXPENSE") : setFieldValue("type","INCOME");
}

const handleTypes = (value) => {
  if (!values.amount) return;
  const absVal = Math.abs(values.amount);
  value === "EXPENSE" ? setFieldValue("amount",-absVal) : setFieldValue("amount",absVal);
};
</script>

<template>
  <button class="green-btn btn-scale" @click="showModal = true">
    <fa-icon icon="fa-plus"/>
  </button>

  <Dialog v-model:visible="showModal" header="Add transaction" modal :closable="false">
    <div class="flex flex-col gap-4 pt-2">

        <floating-input label="Name"
                        :message="'Enter the name of your transaction'"
                        :error-messages="errorBag.name"
                        required>
          <InputText name="name" v-model="name" class="w-full" :invalid="!!errors.name"/>
        </floating-input>

        <floating-input label="Amount"
                        message="Enter amount and select the type of transaction"
                        :error-messages="errorBag.amount"
                        required>
          <div class="flex justify-between gap-2">
            <input-group>
              <input-number name="amount"
                            v-model="amount"
                            showButtons
                            :step="0.1"
                            :minFractionDigits="2"
                            @update:model-value="handleAmount"
                            :invalid="!!errors.amount" />
              <input-group-addon>€</input-group-addon>
            </input-group>
            <select-button name="type"
                           v-model="type"
                           :options="types"
                           option-label="label"
                           option-value="value"
                           :allow-empty="false"
                           @value-change="handleTypes"
            />
          </div>
        </floating-input>

        <floating-input label="Date"
                        message="Enter the date of transaction"
                        :error-messages="errorBag.date"
                        required>
          <date-picker name="date" v-model="date" :max-date="new Date()" :invalid="!!errors.date" class="w-full" />
        </floating-input>

      <floating-input label="Description" message="Enter the description of your transaction">
        <Textarea name="description" v-model="description" class="w-full" auto-resize rows="1"/>
      </floating-input>
    </div>

    <template #footer>
      <Button severity="success" variant="outlined" @click="onSubmit" >
        <fa-icon icon="fa-check"/>
        <span>Save</span>
      </Button>
      <Button severity="danger" variant="outlined" @click="onCancel">
        <fa-icon icon="fa-x"/>
        <span>Cancel</span>
      </Button>
    </template>
  </Dialog>
</template>

<style scoped>
</style>