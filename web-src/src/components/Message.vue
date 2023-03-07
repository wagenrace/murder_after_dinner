<script setup>
defineProps({
    question: String,
    answer: String
})
</script>

<template>
    <div class="flex w-full justify-end">
        <div class="rounded-2xl inline-block p-1 m-1 bg-green-400">
            <span>{{ question }}</span>
        </div>
    </div>
    <div class="flex w-full justify-start">
        <div class="rounded-2xl inline-block p-1 m-1 bg-blue-400">
            <span>{{ answer }}</span>
        </div>
    </div>
</template>