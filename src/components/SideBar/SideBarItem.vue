<template>
    <RouterLink :to="to">
        <li class="relative text-zinc-500 hover:bg-zinc-800 rounded">
            <div class="absolute inset-y-0 left-0 flex items-center">
                <fa :icon="icon" class="w-5 h-5" />
            </div>
            <a class="inline-block w-full px-4 py-2 pl-7 ">{{ name }}</a>
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