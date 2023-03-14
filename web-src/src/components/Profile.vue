<script setup>
defineProps({
    imageName: String
})
</script>

<template>
    <div class="flex w-full justify-center h-full">
        <img :src="'/assets/' + imageName" class="object-cover object-top w-full" :alt="'Portrait of ' + imageName" />
    </div>
</template>