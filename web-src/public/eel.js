class Eel {
  /* 
  This  is for testing online.
  Here are placeholders of the eel functions
  so that the front-end can be tested with 'npm run dev'
  */
  hello_world() {
    console.log("Hello from eel placeholder");
  }
  ask_question(person_id, question) {
    /*
    Mockup ask_question for testing
    */
    const greeting = {
      answer: `I am person ${person_id} and this is my answer`,
      question,
    };
    console.log("ask_question", question);
    return (func) => func(greeting);
  }
}

const eel = new Eel();
