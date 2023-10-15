<template>
    <RouterLink :to="to">
        <li class="relative text-zinc-500">
            <div class="absolute inset-y-0 left-0 flex items-center pl-2">
                <fa :icon="icon" class="w-5 h-5" />
            </div>
            <a class="inline-block w-full px-4 py-2 pl-8 hover:bg-zinc-800 rounded">{{ name }}</a>
        </li>
    </RouterLink>
</template>

<script>
    export default {
        props: {
            to: String,
            icon: String,
            name: String
        }
    }
</script>