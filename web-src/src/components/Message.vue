<script setup>
defineProps({
    question: String,
    answer: String
})
</script>

<template>
    <div class="rounded-2xl p-1 m-1 bg-blue-400">
        <span>{{ question }}</span>
    </div>
    <div class="rounded-2xl p-1 m-1 bg-green-400">
        <span>{{ answer }}</span>
    </div>
</template>