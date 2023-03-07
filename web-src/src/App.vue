<script setup>
import { nextTick, onMounted, ref } from 'vue';
import Message from './components/Message.vue';

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
  eel.ask_question(0, question.value)(addMessage)
  question.value = ""
}
const fillingUp = () => {
  eel.ask_question(0, "Who are you?")(addMessage)
  eel.ask_question(0, "Are you in a relationship?")(addMessage)
  eel.ask_question(0, "Who is the butler?")(addMessage)
  eel.ask_question(0, "When did you leave the dinner?")(addMessage)
}
fillingUp()
</script>

<template>
  <div class="w-1/2 h-full">
    <div class="h-5/6 overflow-y-scroll" ref="messagesBox">
      <Message v-for="answeredQuestion in answeredQuestions" :question="answeredQuestion.question"
        :answer="answeredQuestion.answer" />
    </div>
    <form @submit.prevent="askQuesion">
      <input type="text" v-model="question" ref="input" />
      <button type="submit">Ask question</button>
    </form>
    <button @click="fillingUp">Fill</button>
  </div>
</template>
