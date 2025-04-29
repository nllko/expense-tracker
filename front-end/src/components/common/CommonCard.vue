<script setup>

</script>

<template>
  <div class="bg-mantle p-4 text-white shadow-sm">
    <div class="mb-2">
      <slot name="title" />
      <slot name="sub-title" />
    </div>
    <hr class="border-gray-500 my-1" />
    <div>
      <slot name="content" />
    </div>
  </div>
</template>

<style scoped>
</style>