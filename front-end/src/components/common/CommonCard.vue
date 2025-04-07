<script setup>

</script>

<template>
  <div class="bg-mantle p-4 text-white shadow-sm max-w-md">
    <div class="mb-2">
      <slot name="title" />
      <slot name="sub-title" />
    </div>
    <hr class="border-gray my-1" />
    <div>
      <slot name="content" />
    </div>
  </div>
</template>

<style scoped>
.bg-mantle {
  background-color: var(--mantle);
}

.border-gray {
  border: 1px solid var(--gray);
}
</style>