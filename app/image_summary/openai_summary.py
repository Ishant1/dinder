import os
import openai
from config import OPENAIKEY, LABELS_PATH
import json

openai.api_key = OPENAIKEY

def examples_to_text(labels):
    with open(LABELS_PATH,'r') as f:
        examples = json.load(f)['examples']
    final_text = ""
    examples +=[{'labels':labels,'summary':''}]
    for e in examples:
        one_examp = "labels:{}\nsentence: {}".format(', '.join(e['labels']),e['summary'])
        final_text = final_text+one_examp+'\n'
    return final_text

def get_summary_for_labels(labels):
    response = openai.Completion.create(
        engine="text-davinci-001",
        prompt=examples_to_text(labels),
        max_tokens=35
    )
    return [r['text'] for r in response['choices']]

