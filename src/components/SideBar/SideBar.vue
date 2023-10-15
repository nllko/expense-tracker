<template>
    <div class="h-screen bg-zinc-900 rounded-r-md flex flex-col"
        :class="expanded ? 'sidebar-expanded' : 'sidebar-retracted'">
        <div :class="expanded ? 'button-container-expanded' : 'button-container-retracted'">
            <div class="flex items-center justify-between" :class="expanded ? '' : 'flex-col'">
                <RouterLink to="/">
                    <a class="bg-green-600 ml-1 p-1.5 rounded flex items-center justify-center">
                        <fa icon="bug" class="h-5" />
                    </a>
                </RouterLink>
                <button class="flex items-center justify-center p-0.5 h-6 w-6" @click="toggleSideBar">
                    <fa :icon="expanded ? 'angles-left' : 'angles-right'" class="text-green-500" />
                </button>
            </div>
        </div>

        <div class="px-6 pt-4">
            <hr class="border-zinc-700" />
        </div>

        <div class="px-6 pt-4">
            <ul class="flex flex-col space-y-2" :class="expanded ? 'list-group-expanded' : ''">
                <SideBarItem :class="!expanded ? 'sidebar-item-retractred' : ''" to="/budget" icon="coins" :name="expanded ? 'Budget' : ''" />
                <SideBarItem :class="!expanded ? 'sidebar-item-retractred' : ''" to="/planner" icon="clipboard" :name="expanded ? 'Planner' : ''" />
                <SideBarItem :class="!expanded ? 'sidebar-item-retractred' : ''" to="/debts" icon="receipt" :name="expanded ? 'Debts' : ''" />
            </ul>
        </div>

        <div class="mt-auto pb-4">
            <div class="px-6 pt-8">
                <hr class="border-zinc-700" />
            </div>

            <div class="px-6 pt-4">
                <ul class="flex flex-col space-y-2" :class="expanded ? 'list-group-expanded' : ''">
                    <SideBarItem to="/settings" icon="gear" :name="expanded ? 'Settings' : ''" />
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sidebar-expanded {
    width: 12rem;
}

.sidebar-retracted {
    width: 4rem;
}

.button-container-expanded {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 2rem;
}

.button-container-retracted {
    padding-top: 1.5rem;
}

.list-group-expanded {
    padding-left: 0.125rem;
}

.sidebar-item-retractred {
    padding-top: 0.5rem;
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