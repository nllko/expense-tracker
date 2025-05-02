<script setup>
import {computed} from "vue";

const props = defineProps({
  balance: Number,
  name: String,
})

const isNegative = computed (() => props.balance < 0);

const negativeClass = "text-red";
const positiveClass = "text-green";

const minusIcon = "fa-minus";
const plusIcon = "fa-plus";

</script>

<template>
  <div class="flex items-center w-full" :class="isNegative ? negativeClass : positiveClass">
    <fa-icon :icon="isNegative ? minusIcon : plusIcon" />
    <div class="text-xl px-1" >
      {{ Math.abs(balance).toFixed(2) }}
    </div>
    <fa-icon icon="fa-euro-sign" class="pr-2" />
    <div class="px-1 text-sm overflow-hidden overflow-ellipsis whitespace-nowrap ml-auto">
      {{name}}
    </div>
  </div>
</template>

<style scoped>

</style>