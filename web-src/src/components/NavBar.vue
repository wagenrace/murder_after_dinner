<script setup>
import { ref } from 'vue';

const allPersons = ref([])

const updateAllPersons = (_allPersons) => {
    allPersons.value = _allPersons
}
eel.get_all_persons()(updateAllPersons)

</script>

<template>
    <div class="flex w-full justify-start">
        <RouterLink class="link flex flex-col justify-center bg-lime-700 rounded-t-2xl p-2 px-5 font-semibold" to="/">Home
        </RouterLink>
        <RouterLink class="link flex flex-col justify-center rounded-t-2xl p-2 px-5 font-semibold"
            v-for="person in allPersons" :key="person.id" :to="'/person/' + person.id">
            {{ person.name }}
        </RouterLink>
    </div>
</template>

<style>
.link {
    background-color: rgb(190 242 100);
}

.link.active {
    background-color: rgb(77 124 15);
}
</style>