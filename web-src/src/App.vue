<script setup>
import { nextTick, onMounted, ref } from 'vue';
import Message from './components/Message.vue';
import Profile from './components/Profile.vue'
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
  eel.ask_question(0, "Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches. It has over 2 millennia of history. Berlin, its capital, is home to art and nightlife scenes, the Brandenburg Gate and many sites relating to WWII. Munich is known for its Oktoberfest and beer halls, including the 16th-century Hofbräuhaus. Frankfurt, with its skyscrapers, houses the European Central Bank.")(addMessage)
}
fillingUp()
</script>

<template >
  <div class=" w-full h-full flex flex-row">

    <div class="w-1/2 h-full bg-orange-900">
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
    <div class="w-1/2 h-full bg-green-200">
      <Profile />
    </div>
  </div>
</template>
