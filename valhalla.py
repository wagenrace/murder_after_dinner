import torch
from transformers import AutoTokenizer, AutoModelForQuestionAnswering
from time import time
from test_text import questions, text

# Initialize the tokenizer
tokenizer = AutoTokenizer.from_pretrained(
    "valhalla/longformer-base-4096-finetuned-squadv1"
)

# Initialize the model
model = AutoModelForQuestionAnswering.from_pretrained(
    "valhalla/longformer-base-4096-finetuned-squadv1"
)

# Tokenize the input text

for question in questions:
    start_time = time()
    encoding = tokenizer(question, text, return_tensors="pt")
    input_ids = encoding["input_ids"]

    # Get attention mask (local + global attention)
    attention_mask = encoding["attention_mask"]

    # Get the predictions
    result = model(input_ids, attention_mask=attention_mask)
    start_scores, end_scores = result.values()

    # Convert predictions into answer
    all_tokens = tokenizer.convert_ids_to_tokens(input_ids[0].tolist())
    start_token = torch.argmax(start_scores)
    end_token = torch.argmax(end_scores)
    answer_tokens = all_tokens[start_token : end_token + 1]
    answer = tokenizer.decode(tokenizer.convert_tokens_to_ids(answer_tokens))

    score = min(start_scores[0][start_token].item(), end_scores[0][end_token].item())
    # Print answer
    total_time = time() - start_time
    print(f"Q: {question}")
    print(f"A: {answer}")
    print(f"S: {score}")
    print(f"T: {total_time}s")
    print()
