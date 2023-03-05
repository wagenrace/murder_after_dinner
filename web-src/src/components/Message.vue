<script setup>
const props = defineProps(['question', 'answer'])
</script>

<template>
    <div class="rounded-2xl p-1 m-1 bg-blue-400">
        <span>{{ props.question }}</span>
    </div>
    <div class="rounded-2xl p-1 m-1 bg-green-400">
        <span>{{ props.answer }}</span>
    </div>
</template>