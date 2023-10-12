<template>
    <div class="w-64 h-screen bg-zinc-900 rounded-md">
        <div class="px-6 pt-8">
            <div class="flex items-center justify-between">
                <a href="#" class="bg-green-600 ml-1 p-1.5 rounded flex items-center justify-center">
                    <fa icon="bug" class="h-5"/>
                </a>
                <button class="flex items-center justify-center p-0.5 rounded bg-zinc-800 h-6 w-6">
                    <fa icon="angles-left" class="text-green-500"/>
                </button>
            </div>
        </div>

        <div class="px-6 pt-4">
            <hr class="border-zinc-700" />
        </div>

        <div class="px-6 pt-4">
            <ul class="flex flex-col space-y-2 pl-0.5">
                <li class="relative text-zinc-500">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <fa icon="coins" class="w-5 h-5" />
                    </div>
                    <a href="#" class="inline-block w-full px-4 py-2 pl-8 hover:bg-zinc-800 rounded">Budget</a>
                </li>
                <li class="relative text-zinc-500">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <fa icon="clipboard" class="w-5 h-5" />
                    </div>
                    <a href="#" class="inline-block w-full px-4 py-2 pl-8 hover:bg-zinc-800 rounded">Planner</a>
                </li>
                <li class="relative text-zinc-500">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <fa icon="receipt" class="w-5 h-5" />
                    </div>
                    <a href="#" class="inline-block w-full px-4 py-2 pl-8 hover:bg-zinc-800 rounded">Debts</a>
                </li>
            </ul>
        </div>

        <div class="px-6 pt-8">
            <hr class="border-zinc-700" />
        </div>

        <div class="px-6 pt-4">
            <ul class="flex flex-col space-y-2 pl-0.5">
                <li class="relative text-zinc-500">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <fa icon="gear" class="w-5 h-5" />
                    </div>
                    <a href="#" class="inline-block w-full px-4 py-2 pl-8 hover:bg-zinc-800 rounded">Settings</a>
                </li>
            </ul>
        </div>
    </div>
</template>