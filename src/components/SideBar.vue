<template>
    <div class="w-64 h-screen bg-zinc-900 rounded-md">
        <div class="px-6 pt-8">
            <div class="flex items-center justify-between">
                <RouterLink to="/">
                    <a class="bg-green-600 ml-1 p-1.5 rounded flex items-center justify-center">
                        <fa icon="bug" class="h-5" />
                    </a>
                </RouterLink>
                <button class="flex items-center justify-center p-0.5 rounded bg-zinc-800 h-6 w-6">
                    <fa icon="angles-left" class="text-green-500" />
                </button>
            </div>
        </div>

        <div class="px-6 pt-4">
            <hr class="border-zinc-700" />
        </div>

        <div class="px-6 pt-4">
            <ul class="flex flex-col space-y-2 pl-0.5">
                <SideBarItem to="/budget" icon="coins" name="Budget" />
                <SideBarItem to="/planner" icon="clipboard" name="Planner" />
                <SideBarItem to="/debts" icon="receipt" name="Debts" />
            </ul>
        </div>

        <div class="px-6 pt-8">
            <hr class="border-zinc-700" />
        </div>

        <div class="px-6 pt-4">
            <ul class="flex flex-col space-y-2 pl-0.5">
                <SideBarItem to="/settings" icon="gear" name="Settings" />
            </ul>
        </div>
    </div>
</template>

<script>
import SideBarItem from './SideBarItem.vue';

export default {
    name: 'SideBar',
    components: {
        SideBarItem
    }
}

</script>