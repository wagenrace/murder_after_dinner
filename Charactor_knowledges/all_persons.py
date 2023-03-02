import os

from .Person import Person

__location__ = os.path.realpath(os.path.join(os.getcwd(), os.path.dirname(__file__)))
with open(os.path.join(__location__, "general_knowledge.txt"), "r") as f:
    general_knowledge = f.read()

all_persons = [Person("Jing", general_knowledge, "")]
