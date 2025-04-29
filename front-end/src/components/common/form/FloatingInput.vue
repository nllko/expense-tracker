<script setup>
import {FloatLabel, Message} from "primevue";

defineProps({
  label: String,
  required: Boolean,
  message: String,
  errorMessages: Array,
});
</script>

<template>
  <div>
    <float-label variant="on">
      <slot></slot>
      <label class="z-10">{{ label }}<span v-if="required" class="text-red">*</span></label>
    </float-label>
    <Transition name="slide-right">
      <Message v-if="!errorMessages" size="small" severity="secondary" variant="simple">{{ message }}</Message>
      <Message v-else-if="errorMessages" v-for="msg in errorMessages" v-bind:key="msg" size="small" severity="error" variant="simple">
        {{ msg }}
      </Message>
    </Transition>
  </div>
</template>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s ease-out;
}

.slide-right-enter-from {
  position: absolute;
  opacity: 0;
  transform: translateX(-50px);
}

.slide-right-leave-to {
  position: absolute;
  opacity: 0;
  transform: translateX(50px);
}
</style>