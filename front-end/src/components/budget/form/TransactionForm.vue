<script setup>

import {DATE_FORMAT} from "@/utils/dateUtils";
import FloatingInput from "@/components/common/form/FloatingInput.vue";
import {DatePicker, InputGroup, InputGroupAddon, InputNumber, InputText, SelectButton, Textarea} from "primevue";
import {ref} from "vue";
import {useTransactionStore} from "@/stores/TransactionStore";

const transactionStore = useTransactionStore();

const types = ref(
    ["Expense", "Income"].map((type) => ({label: type, value: type.toUpperCase()}))
);

</script>

<template>
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
</template>

<style scoped>

</style>