import os
import openai
from app.config import OPENAIKEY
import json

EXAMPLE_JSON = 'app/image_summary/labels-summary.json'
openai.api_key = OPENAIKEY

def examples_to_text(labels):
    with open(EXAMPLE_JSON,'r') as f:
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
        max_tokens=15
    )
    return [r['text'] for r in response['choices']]

