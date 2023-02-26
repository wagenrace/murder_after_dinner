import eel


@eel.expose
def send_message(person_id: int, message: str):
    reply = f"Person {person_id}: reply to {message}"
    print(reply)
    eel.add_reply(reply)


eel.init("web")
eel.start("index.html")

