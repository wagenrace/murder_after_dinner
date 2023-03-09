<script setup>

const allPersons = [
    { name: "Amber", id: 0 },
    { name: "Saabir", id: 1 },
    { name: "Jabari", id: 2 },
    { name: "Jing", id: 3 },
    { name: "Feodora", id: 4 },
    { name: "Gael", id: 5 },
]
</script>

<template>
    <div class="flex w-full justify-start">
        <RouterLink class="flex flex-col justify-center bg-lime-300 rounded-t-2xl p-2 px-5 font-semibold" to="/">Home
        </RouterLink>
        <RouterLink class="flex flex-col justify-center bg-lime-300 rounded-t-2xl p-2 px-5 font-semibold"
            v-for="person in allPersons" :key="person.id" :to="'/person/' + person.id">
            {{ person.name }}
        </RouterLink>
    </div>
</template>