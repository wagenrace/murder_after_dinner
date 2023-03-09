<script setup>
import { nextTick, onMounted, ref } from 'vue';
import Message from '../components/Message.vue';
import Profile from '../components/Profile.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const input = ref(null)
const messagesBox = ref(null)

onMounted(() => {
    input.value.focus()
    messagesBox.value.scrollTop = messagesBox.value.scrollHeight
})

const answeredQuestions = ref([])
const question = ref("")
const addMessage = (answeredQuestion) => {
    answeredQuestions.value.push(answeredQuestion)
    // Move to bottom of the chat when div is updated (nextTick)
    nextTick(() => {
        if (messagesBox.value) messagesBox.value.scrollTop = messagesBox.value.scrollHeight
    })
}
const askQuesion = () => {
    eel.ask_question(route.params.id, question.value)(addMessage)
    question.value = ""
}
const fillingUp = () => {
    eel.ask_question(route.params.id, "Who are you?")(addMessage)
    eel.ask_question(route.params.id, "Are you in a relationship?")(addMessage)
    eel.ask_question(route.params.id, "Who is the butler?")(addMessage)
    eel.ask_question(route.params.id, "When did you leave the dinner?")(addMessage)
    eel.ask_question(route.params.id, "Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches. It has over 2 millennia of history. Berlin, its capital, is home to art and nightlife scenes, the Brandenburg Gate and many sites relating to WWII. Munich is known for its Oktoberfest and beer halls, including the 16th-century Hofbräuhaus. Frankfurt, with its skyscrapers, houses the European Central Bank.")(addMessage)
}
fillingUp()
</script>

<template>
    <div class="w-full h-14/15 flex flex-row">
        <div class="w-3/5 h-full bg-gray-200 flex flex-col">
            <div class="grow overflow-y-scroll" ref="messagesBox">
                <Message v-for="answeredQuestion in answeredQuestions" :question="answeredQuestion.question"
                    :answer="answeredQuestion.answer" />
            </div>
            <form @submit.prevent="askQuesion" class="flex-none w-full flex p-1">
                <input class="grow" type="text" v-model="question" ref="input" />
                <button class="flex-none p-2 bg-green-400 rounded-r-full" type="submit">Ask question</button>
            </form>
            <button class="bg-red-500 p-2 rounded-full w-24" @click="fillingUp">Fill</button>
        </div>
        <div class="w-2/5 h-full bg-green-200">
            <Profile />
        </div>
    </div>
</template>