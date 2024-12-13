<script setup>

</script>

<template>
  <div class="card">
    <div class="card-header">
      <slot name="title" />
      <slot name="sub-title" />
    </div>
    <hr class="divider" />
    <div class="card-content">
      <slot name="content" />
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: var(--mantle);
  color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: auto;
}

.card-header {
  margin-bottom: 16px;
}

.divider {
  border: none;
  border-top: 1px solid #444;
  margin: 16px 0;
}

.card-content {
  margin-top: 16px;
}
</style>