class Eel {
  ask_question(person_id, question) {
    /*
    Mockup ask_question for testing
    */
    const greeting = {
      answer: `I am person ${person_id} and this is my answer`,
      question,
    };
    return (func) => func(greeting);
  }
}

const eel = new Eel();
