<template>
    <div class="w-64 h-screen bg-zinc-900 rounded-md">
        <div class="px-6 pt-8">
            <div class="flex items-center justify-between">
                <a href="#" class="bg-green-600 p-1.5 rounded flex items-center justify-center">💸</a>
                <button class="flex items-center justify-center p-0.5 rounded bg-zinc-800">⬅️</button>
            </div>
        </div>

        <div class="px-6 pt-4">
            <hr class="border-zinc-700" />
        </div>

        <div class="px-6 pt-4">
            <ul class="flex flex-col space-y-2">
                <li class="relative text-zinc-500">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-2 pb-1">
                        <a class="w-5 h-5 stroke-current">🏠</a>
                    </div>
                    <a href="#" class="inline-block w-full px-4 py-2 pl-8 hover:bg-zinc-800 rounded">Dashboard</a>
                </li>
            </ul>
        </div>

        <div class="px-6 pt-8">
            <hr class="border-zinc-700" />
        </div>

        <div class="px-6 pt-4">
            <ul class="flex flex-col space-y-2">
                <li class="relative text-zinc-500">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-2 pb-1">
                        <a class="w-5 h-5 stroke-current">⚙️</a>
                    </div>
                    <a href="#" class="inline-block w-full px-4 py-2 pl-8 hover:bg-zinc-800 rounded">Settings</a>
                </li>
            </ul>
        </div>

        <div class="pl-6 pr-4 bg-[#232529] flex items-center justify-between">
            <div class="flex items-center">
                <div class="w-8 h-8 rounded-full">
                    <img class="rounded-full" src="https://yt3.ggpht.com/a/AATXAJz8_MCzuY5xTcQnOxHeCiKnxd6O9WxBB5SCCQ=s900-c-k-c0xffffffff-no-rj-mo"/>
                </div>
                <div class="flex flex-col pl-3">
                    <div class="text-gray-50">
                        Admin
                    </div>
                    <span class="text-sm text-gray-400 font-light tracking-tight">admin@admin.com</span>
                </div>
            </div>
            <button>⬇️</button>
        </div>
    </div>
</template>