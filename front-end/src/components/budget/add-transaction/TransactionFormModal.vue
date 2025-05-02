<script setup>
import {ref} from "vue";
import {Dialog, Button} from "primevue";
import {useBudgetStore} from "@/stores/BudgetStore";
import {useTransactionStore} from "@/stores/TransactionStore";
import TransactionForm from "@/components/budget/form/TransactionForm.vue";

const budgetStore = useBudgetStore();
const transactionStore = useTransactionStore();


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
</template>

<style scoped>
</style>