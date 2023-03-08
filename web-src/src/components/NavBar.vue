<script setup>

const allNames = ["Amber",
    "Saabir",
    "Jabari",
    "Jing",
    "Feodora",
    "Gael"]
</script>

<template>
    <div class="flex w-full justify-start">
        <div class="flex flex-col justify-center bg-lime-300 rounded-t-2xl p-2 px-5 font-semibold" v-for="name in allNames"
            :key="name">
            {{ name }}
        </div>
    </div>
</template>