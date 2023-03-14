from dataclasses import dataclass, field
from typing import List
from transformers import pipeline

model_name = "deepset/roberta-base-squad2"

# a) Get predictions
nlp = pipeline("question-answering", model=model_name, tokenizer=model_name)


@dataclass
class AnsweredQuestion:
    question: str
    answer: str

    def __iter__(self):
        yield "answer", self.answer
        yield "question", self.question


@dataclass
class Person:
    name: str
    general_knowledge: str
    first_statement: str
    image_name: str
    knowledge: str = ""
    answeredQuestions: List[AnsweredQuestion] = field(default_factory=lambda: [])

    def __post_init__(self):
        self.knowledge = f"""My name is {self.name}
            {self.general_knowledge}
            {self.first_statement}"""

    def ask_question(self, question: str):
        QA_input = {"question": question, "context": self.knowledge}
        res = nlp(QA_input)
        score = res["score"]
        self.answeredQuestions.append(AnsweredQuestion(question, res["answer"]))

    def __iter__(self):
        yield "name", self.name
        yield "imageName", self.image_name
        yield "answeredQuestions", [dict(a) for a in self.answeredQuestions]
