let persons = [
  {
    id: 0,
    name: "Investigator",
    imageName: "Investigator.png",
    answeredQuestions: [
      {
        question: "Who are you?",
        answer: `Amber`,
      },
      {
        question: "What is Germany?",
        answer: `Germany,[e] officially the Federal Republic of Germany,[f] is a country in Central Europe. It is the second-most populous country in Europe after Russia, and the most populous member state of the European Union. Germany is situated between the Baltic and North seas to the north, and the Alps to the south; it covers an area of 357,022 square kilometres (137,847 sq mi), with a population of around 84 million within its 16 constituent states. Germany borders Denmark to the north, Poland and the Czech Republic to the east, Austria and Switzerland to the south, and France, Luxembourg, Belgium, and the Netherlands to the west. The nation's capital and most populous city is Berlin and its main financial centre is Frankfurt; the largest urban area is the Ruhr.
      Various Germanic tribes have inhabited the northern parts of modern Germany since classical antiquity. A region named Germania was documented before AD 100. In 962, the Kingdom of Germany formed the bulk of the Holy Roman Empire. During the 16th century, northern German regions became the centre of the Protestant Reformation. Following the Napoleonic Wars and the dissolution of the Holy Roman Empire in 1806, the German Confederation was formed in 1815.
      Formal unification of Germany into the modern nation-state was commenced on 18 August 1866 with the North German Confederation Treaty establishing the Prussia-led North German Confederation later transformed in 1871 into the German Empire. After World War I and the German Revolution of 1918–1919, the Empire was in turn transformed into the semi-presidential Weimar Republic. The Nazi seizure of power in 1933 led to the establishment of a totalitarian dictatorship, World War II, and the Holocaust. After the end of World War II in Europe and a period of Allied occupation, in 1949, Germany as a whole was organized into two separate polities with limited sovereignity: the Federal Republic of Germany, generally known as West Germany, and the German Democratic Republic, East Germany, while Berlin de jure continued its Four Power status. The Federal Republic of Germany was a founding member of the European Economic Community and the European Union, while the German Democratic Republic was a communist Eastern Bloc state and member of the Warsaw Pact. After the fall of communist led-government in East Germany, German reunification saw the former East German states join the Federal Republic of Germany on 3 October 1990—becoming a federal parliamentary republic.
      Germany is a great power with a strong economy; it has the largest economy in Europe, the world's fourth-largest economy by nominal GDP and the fifth-largest by PPP. As a global power in industrial, scientific and technological sectors, it is both the world's third-largest exporter and importer. As a highly developed country, which ranks ninth on the Human Development Index, it offers social security and a universal health care system, environmental protections, a tuition-free university education, and it is ranked as sixteenth-most peaceful country in the world. Germany is a member of the United Nations, the European Union, NATO, the Council of Europe, the G7, the G20 and the OECD. It has the third-greatest number of UNESCO World Heritage Sites.`,
      },
    ],
  },
  {
    name: "Saabir",
    imageName: "Saabir.png",
    id: 1,
    answeredQuestions: [
      { question: "Are you the murder?", answer: "I am not the murder" },
      { question: "Who are you?", answer: "Saabir" },
    ],
  },
  {
    name: "Jabari",
    imageName: "Jabari.png",
    id: 2,
    answeredQuestions: [
      { question: "Are you the murder?", answer: "I am not the murder" },
      { question: "Who are you?", answer: "Jabari" },
    ],
  },
  {
    name: "Jing",
    imageName: "Jing.png",
    id: 3,
    answeredQuestions: [
      { question: "Are you the murder?", answer: "I am not the murder" },
      { question: "Who are you?", answer: "Jing" },
    ],
  },
  {
    name: "Feodora",
    imageName: "Feodora.png",
    id: 4,
    answeredQuestions: [
      { question: "Are you the murder?", answer: "I am not the murder" },
      { question: "Who are you?", answer: "Feodora" },
    ],
  },
  {
    name: "Gael",
    imageName: "Gael.png",
    id: 5,
    answeredQuestions: [
      { question: "Are you the murder?", answer: "I am not the murder" },
      { question: "Who are you?", answer: "Gael" },
    ],
  },
];

class Eel {
  ask_question(person_id, question) {
    /*
    Mockup ask_question for testing
    */
    const answeredQuestion = {
      answer: `I am person ${person_id} and this is my answer`,
      question,
    };
    persons[person_id].answeredQuestions.push(answeredQuestion);
    return (func) => func(answeredQuestion);
  }
  get_person(person_id) {
    /*
    Mockup ask_question for testing
    */
    return (func) => func(persons[person_id]);
  }
  get_all_persons() {
    return persons;
  }
}

const eel = new Eel();
