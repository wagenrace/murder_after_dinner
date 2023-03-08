<script setup>
defineProps({
    question: String,
    answer: String
})
</script>

<template>
    <div class="flex w-full justify-end">
        <div class="rounded-2xl inline-block p-2 m-2 bg-green-400 max-w-xl">
            <span class="m-1 indent-0">{{ question }}</span>
        </div>
    </div>
    <div class="flex w-full justify-start">
        <div class="rounded-2xl inline-block p-2 m-2 bg-blue-400 max-w-xl">
            <span class="m-1 indent-0">{{ answer }}</span>
        </div>
    </div>
</template>