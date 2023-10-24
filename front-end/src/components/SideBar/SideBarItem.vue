<script setup>
import { defineProps } from 'vue';
defineProps({
    to: String,
    icon: String,
    label: String,
    expanded: Boolean
})
</script>
<template>
    <RouterLink :to="to">
        <li class="flex text-zinc-500 hover:bg-zinc-800 hover:text-green-500 rounded" :class="!expanded && 'py-2'">
            <div class="flex pl-5">
                <div class="flex items-center">
                    <fa :icon="icon" class="w-6 h-6" />
                </div>
                <a class="inline-block w-full px-4 py-2" :class="expanded ? 'text-fade-in' : 'text-fade-out'">{{ label
                }}</a>
            </div>
        </li>
    </RouterLink>
</template>

<style scoped>
.router-link-exact-active {
    border-right: 5px solid rgb(34 197 94);
    background-color: rgb(39 39 42)
}

.text-fade-out {
    opacity: 0;
    transition: 0.3s ease-out;
}

.text-fade-in {
    opacity: 100%;
    transition: 0.3s ease-out;
}
</style>