<script setup>
import {FloatLabel, Message} from "primevue";

defineProps({
  label: String,
  required: Boolean,
  message: String,
});
</script>

<template>
  <div>
    <float-label variant="on">
      <slot></slot>
      <label>{{ label }}<span v-if="required" class="text-red">*</span></label>
    </float-label>
    <Message size="small" severity="secondary" variant="simple">{{ message }}</Message>
  </div>
</template>

<style scoped>

</style>