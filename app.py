import eel
from Charactor_knowledges import all_persons


@eel.expose
def ask_question(person_id: int, question: str):
    person_id = int(person_id)
    all_persons[person_id].ask_question(question)


@eel.expose
def get_person(person_id: int):
    person_id = int(person_id)
    return dict(all_persons[person_id])


@eel.expose
def get_all_persons():
    _all_persons = [
        {"id": person_id, "name": all_persons[person_id].name}
        for person_id in range(len(all_persons))
    ]
    return _all_persons


eel.init("web")


eel.start("index.html")
