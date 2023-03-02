from dataclasses import dataclass


@dataclass
class Person:
    name: str
    general_knowledge: str
    first_statement: str
    knowledge: str = ""

    def __post_init__(self):
        self.knowledge = f"""My name is {self.name}
            {self.general_knowledge}
            {self.first_statement}"""
