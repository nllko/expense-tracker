<template>
    <div class="h-screen bg-zinc-900 rounded-r-md flex flex-col sidebar-animation" :class="expanded ? 'w-48' : 'w-16'">
        <div :class="expanded ? 'px-6 pt-8' : 'pt-6'">
            <div class="flex items-center justify-between" :class="!expanded && 'flex-col'">
                <RouterLink to="/">
                    <a class="bg-green-600 ml-1 p-1.5 rounded flex items-center justify-center">
                        <fa icon="bug" class="h-5" />
                    </a>
                </RouterLink>
                <button class="flex items-center justify-center p-0.5 h-6 w-6"
                    :class="{ 'mt-4 button-animation-right': !expanded, 'button-animation-left': expanded }"
                    @click="toggleSideBar">
                    <fa :icon="expanded ? 'angles-left' : 'angles-right'" class="text-green-500 hover:text-green-300 p-2" />
                </button>
            </div>
        </div>

        <div class="px-6 pt-4">
            <hr class="border-zinc-700" />
        </div>

        <div class="pt-4">
            <ul class="flex flex-col space-y-2">
                <SideBarItem to="/budget" icon="coins" :label="expanded ? 'Budget' : ''" :expanded="expanded" />
                <SideBarItem to="/planner" icon="clipboard" :label="expanded ? 'Planner' : ''" :expanded="expanded" />
                <SideBarItem to="/debts" icon="receipt" :label="expanded ? 'Debts' : ''" :expanded="expanded" />
            </ul>
        </div>

        <div class="mt-auto pb-4">
            <div class="px-6 pt-8">
                <hr class="border-zinc-700" />
            </div>

            <div class="pt-2">
                <ul class="flex flex-col space-y-2">
                    <SideBarItem to="/settings" icon="gear" :label="expanded ? 'Settings' : ''" :expanded="expanded"/>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sidebar-animation {
    transition: 0.2s ease-out;
}

.button-animation-left {
    transition: 0.2s ease-out;

    &:hover {
        transform: translateX(-0.5rem);
    }
}

.button-animation-right {
    transition: 0.2s ease-out;

    &:hover {
        transform: translateX(0.5rem);
    }
}
</style>
<script>
import SideBarItem from './SideBarItem.vue';

export default {
    name: 'SideBar',
    data() {
        return {
            expanded: true
        }
    },
    methods: {
        toggleSideBar() {
            this.expanded = !this.expanded;
        }
    },
    components: {
        SideBarItem
    }
}

</script>