from transformers import pipeline
from time import time
from test_text import questions, text

model_name = "deepset/roberta-base-squad2"

# a) Get predictions
nlp = pipeline("question-answering", model=model_name, tokenizer=model_name)

for question in questions:
    start_time = time()
    QA_input = {
        "question": question,
        "context": text,
    }
    res = nlp(QA_input)

    total_time = time() - start_time
    print(f"Q: {question}")
    print(f"A: {res['answer']}")
    print(f"S: {res['score']}")
    print(f"T: {total_time}s")
    print("")
