<script setup>
import {ref} from "vue";
import {InputText, Textarea, InputNumber, DatePicker, Dialog, SelectButton, Button, InputGroup, InputGroupAddon} from "primevue";
import FloatingInput from "@/components/common/form/FloatingInput.vue";
import {useBudgetStore} from "@/stores/BudgetStore";
import {DATE_FORMAT} from "@/utils/dateUtils";
import {useTransactionStore} from "@/stores/TransactionStore";

const budgetStore = useBudgetStore();
const transactionStore = useTransactionStore();

const types = ref(
    ["Expense", "Income"].map((type) => ({label: type, value: type.toUpperCase()}))
);

const showModal = ref(false);

const onSubmit = () => {
  transactionStore.validateAndSave().then(() => {
    budgetStore.fetchTransactions();
    budgetStore.fetchBalances();
  });
};

const onCancel = () => {
  showModal.value = false;
  transactionStore.resetForm();
}
</script>

<template>
  <button class="green-btn btn-scale" @click="showModal = true">
    <fa-icon icon="fa-plus"/>
  </button>

  <Dialog v-model:visible="showModal" header="Add transaction" modal :closable="false">
    <div class="flex flex-col gap-4 pt-2">

        <floating-input label="Name"
                        :message="'Enter the name of your transaction'"
                        :error-messages="transactionStore.errorBag.name"
                        required>
          <InputText name="name" v-model="transactionStore.name" class="w-full" :invalid="!!transactionStore.errors.name"/>
        </floating-input>

        <floating-input label="Amount"
                        message="Enter amount and select the type of transaction"
                        :error-messages="transactionStore.errorBag.amount"
                        required>
          <div class="flex justify-between gap-2">
            <input-group>
              <input-number name="amount"
                            v-model="transactionStore.amount"
                            showButtons
                            :step="0.1"
                            :minFractionDigits="2"
                            @update:model-value="transactionStore.syncTypeWithAmount"
                            :invalid="!!transactionStore.errors.amount" />
              <input-group-addon>€</input-group-addon>
            </input-group>
            <select-button name="type"
                           v-model="transactionStore.type"
                           :options="types"
                           option-label="label"
                           option-value="value"
                           :allow-empty="false"
                           @value-change="transactionStore.syncAmountWithType"
            />
          </div>
        </floating-input>

        <floating-input label="Date"
                        message="Enter the date of transaction"
                        :error-messages="transactionStore.errorBag.date"
                        required>
          <date-picker name="date"
                       v-model="transactionStore.date"
                       :dateFormat="DATE_FORMAT"
                       :max-date="new Date()"
                       :invalid="!!transactionStore.errors.date"
                       class="w-full" />
        </floating-input>

      <floating-input label="Description" message="Enter the description of your transaction">
        <Textarea name="description" v-model="transactionStore.description" class="w-full" auto-resize rows="1"/>
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