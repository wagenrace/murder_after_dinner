import os

from .Person import Person

__location__ = os.path.realpath(os.path.join(os.getcwd(), os.path.dirname(__file__)))
with open(os.path.join(__location__, "general_knowledge.txt"), "r") as f:
    general_knowledge = f.read()

all_persons = [
    Person("The investigator", general_knowledge, "", image_name="Investigator.png"),
    Person("Saabir", general_knowledge, "", image_name="Saabir.png"),
    Person("Jabari", general_knowledge, "", image_name="Jabari.png"),
    Person("Jing", general_knowledge, "", image_name="Jing.png"),
    Person("Feodora", general_knowledge, "", image_name="Feodora.png"),
    Person("Gael", general_knowledge, "", image_name="Gael.png"),
]
