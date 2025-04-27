<script setup>
import {ref} from "vue";
import {InputText, Textarea, InputNumber, DatePicker, Dialog, SelectButton, Button} from "primevue";
import FloatingInput from "@/components/common/form/FloatingInput.vue";

const form = ref({
  name: null,
  description: null,
  amount: null,
  type: null,
  date: null
})

const types = ref(
    [{
      label: "Expense",
      value: "expense"
    },
      {
        label: "Income",
        value: "income"
      }]
)

const showModal = ref(false)

const save = () => {
}

const close = () => {
  showModal.value = false;
}

</script>

<template>
  <button class="green-btn btn-scale" @click="showModal = true">
    <fa-icon icon="fa-plus"/>
  </button>

  <Dialog v-model:visible="showModal" header="Add transaction" modal :closable="false">
    <div class="flex flex-col gap-4 pt-2">

      <floating-input label="Name" message="Enter the name of your transaction" required>
        <InputText id="name" class="w-full" v-model="form.name"/>
      </floating-input>

      <floating-input label="Description" message="Enter the description of your transaction">
        <Textarea id="description" class="w-full" auto-resize rows="1" name="description" v-model="form.description"/>
      </floating-input>

      <floating-input label="Amount" message="Enter amount and select the type of transaction" required>
        <div class="flex justify-between gap-2">
          <input-number id="amount" v-model="form.amount"/>
          <select-button :options="types" option-label="label" option-value="value" :allow-empty="false"
                         v-model="form.type"/>
        </div>
      </floating-input>

      <floating-input label="Date" message="Enter the date of transaction" required>
        <date-picker class="w-full" name="date" v-model="form.date"/>
      </floating-input>
    </div>

    <template #footer>
      <Button severity="success" variant="outlined" @click="save()">
        <fa-icon icon="fa-check"/>
        <span>Cancel</span>
      </Button>
      <Button severity="danger" variant="outlined" @click="close()">
        <fa-icon icon="fa-x"/>
        <span>Cancel</span>
      </Button>
    </template>
  </Dialog>
</template>

<style scoped>
</style>