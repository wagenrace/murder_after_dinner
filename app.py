import eel
from transformers import pipeline
from test_text import questions
from Charactor_knowledges import all_persons

model_name = "deepset/roberta-base-squad2"

# a) Get predictions
nlp = pipeline("question-answering", model=model_name, tokenizer=model_name)


@eel.expose
def send_message(person_id: int, question: str):
    person = all_persons[person_id]
    QA_input = {"question": question, "context": person.knowledge}
    res = nlp(QA_input)

    reply = f"{res['answer']} ({res['score']:.3f})"
    eel.add_reply(reply)


eel.init("web")


@eel.expose
def fill():
    for q in questions:
        eel.add_question(q)
        send_message(0, q)


eel.start("index.html")
