<script setup>
import {DataTable, Column, Tag, Button, Dialog} from "primevue";
import {useBudgetStore} from "@/stores/BudgetStore";
import CurrencyText from "@/components/common/fields/CurrencyText.vue";
import {formatStringToIso} from "@/utils/dateUtils";
import {ref} from "vue";
import {useTransactionStore} from "@/stores/TransactionStore";
import TransactionForm from "@/components/budget/form/TransactionForm.vue";

const budgetStore = useBudgetStore();
const transactionStore = useTransactionStore();

const showModal = ref(false);

const getSeverity = (type) => {
  return type === "EXPENSE" ? "danger" : "success";
};

const formatString = (string, maxChars) => {
  if (!string) return;
  return string.length > maxChars ? string.slice(0, maxChars - 3) + '...' : string;
}

const openDialog = (transaction) => {
  console.log(transaction)
  transactionStore.initForm(transaction);
  showModal.value = true;
}

const deleteTransaction = (id) => {
  transactionStore.deleteTransaction(id).then(() => {
    budgetStore.fetchTransactions();
    budgetStore.fetchBalances();
  });
}


const onSubmit = () => {
  transactionStore.validateAndSave().then(() => {
    budgetStore.fetchTransactions();
    budgetStore.fetchBalances();
    showModal.value = false;
  });
};

const onCancel = () => {
  showModal.value = false;
  transactionStore.resetForm();
}

</script>

<template>
  <div class="bg-mantle rounded p-2">
    <DataTable :value="budgetStore.transactions"
               paginator
               :rows="5"
               :rowsPerPageOptions="[5, 10, 20, 50]"
               removableSort
               stripedRows>
      <template #empty> No transactions found. </template>
      <template #loading> Loading transactions data. Please wait. </template>
      <Column field="name" header="Name" style="width: 15%" sortable></Column>
      <Column field="description" header="Description" sortable>
        <template #body="{ data }">
          {{formatString(data.description, 70)}}
        </template>
      </Column>
      <Column field="amount" header="Amount" style="width: 10%" sortable>
        <template #body="{ data }">
          <CurrencyText :balance="data.amount" />
        </template>
      </Column>
      <Column field="type" header="Type" style="width: 5%" sortable>
        <template #body="{ data }">
          <Tag :value="data.type" :severity="getSeverity(data.type)" class="w-full" />
        </template>
      </Column>
      <Column field="date" header="Date" style="width: 5%" sortable>
        <template #body="{ data }">
          {{formatStringToIso(data.date)}}
        </template>
      </Column>
      <Column style="width: 10%">
        <template #body="{ data }">
          <div class="flex flex-row gap-2">
            <Button severity="warn" variant="outlined" @click="openDialog(data)" >
              <fa-icon icon="fa-pencil"/>
              <span>Edit</span>
            </Button>
            <Button severity="danger" variant="outlined" @click="deleteTransaction(data.id)">
              <fa-icon icon="fa-x"/>
              <span>Delete</span>
            </Button>
          </div>
        </template>
      </Column>
    </DataTable>
    <Dialog v-model:visible="showModal" header="Edit transaction" modal :closable="false">
      <TransactionForm />
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
  </div>
</template>

<style scoped>
</style>