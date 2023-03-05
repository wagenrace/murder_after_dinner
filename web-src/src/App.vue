<script setup>
import { ref } from 'vue';
import Message from './components/message.vue';

const answeredQuestions = ref([])
const question = ref("")
const addMessage = (answeredQuestion) => {
  answeredQuestions.value.push(answeredQuestion)
}
const askQuesion = () => {
  console.log(question.value)
  eel.ask_question(0, question.value)(addMessage)
}
</script>

<template>
  <div>
    <message v-for="answeredQuestion in answeredQuestions" :question="answeredQuestion.question"
      :answer="answeredQuestion.answer" />
  </div>
  <form @submit.prevent="askQuesion">
    <input type="text" v-model="question" />
    <button type="submit">Ask question</button>
  </form>
</template>
