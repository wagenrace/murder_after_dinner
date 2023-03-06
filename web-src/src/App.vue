<script setup>
import { ref } from 'vue';
import Message from './components/Message.vue';

const answeredQuestions = ref([])
const question = ref("")
const addMessage = (answeredQuestion) => {
  answeredQuestions.value.push(answeredQuestion)
}
const askQuesion = () => {
  console.log(question.value)
  eel.ask_question(0, question)(addMessage)
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
  <div>
    <Message v-for="answeredQuestion in answeredQuestions" :question="answeredQuestion.question"
      :answer="answeredQuestion.answer" />
  </div>
  <form @submit.prevent="askQuesion">
    <input type="text" v-model="question" />
    <button type="submit">Ask question</button>
  </form>
  <button @click="fillingUp">Fill</button>
</template>
