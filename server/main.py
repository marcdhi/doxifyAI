
# import os
# from queue import Queue
# from llama_cpp import Llama
# from fastapi import FastAPI

# app = FastAPI()

# llm = Llama(model_path="./model/llama-2-7b-chat.ggmlv3.q2_K.bin")

# def bfs_traversal(root_dir):
#     queue = Queue()
#     queue.put(root_dir)

#     while not queue.empty():
#         current_dir = queue.get()

#         try:
#             with os.scandir(current_dir) as entries:
#                 for entry in entries:
#                     if entry.is_dir():
#                         queue.put(entry.path)
#                     else:
#                         process_file(entry.path)
#         except OSError as e:
#             print("Error accessing directory:", e)

# def process_file(file_path):
#     with open(file_path, 'r', encoding='utf-8') as file:
#         prompt_text = file.read()
#         # try:
#         #     output = llm(f"For the given code, generate a documentation in Markdown Format, the documentation should follow all the best practices : {prompt_text}", max_tokens=2000, echo=True)
#         #     response_text = output['choices'][0]['text']
#         #     print("Doxified:", response_text)
#         # except Exception as e:
#         #     print("Error generating documentation:", str(e))
#         print(prompt_text)

# @app.get("/")
# def home():
#     return {"Doxify": "Works"}

# @app.get("/doxify_all")
# def generate_all_docs():
#     bfs_traversal("./files")
#     return {"message": "All files doxified."}

import os
from queue import Queue
from fastapi import FastAPI

app = FastAPI()

def bfs_traversal(root_dir):
    queue = Queue()
    queue.put(root_dir)

    while not queue.empty():
        current_dir = queue.get()

        try:
            with os.scandir(current_dir) as entries:
                for entry in entries:
                    if entry.is_dir():
                        queue.put(entry.path)
                    else:
                        process_file(entry.path)
        except OSError as e:
            print("Error accessing directory:", e)

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        prompt_text = file.read()
        # Process the file here
        print(prompt_text)

@app.get("/")
def home():
    return {"Doxify": "Works"}

@app.get("/doxify_all")
def generate_all_docs():
    bfs_traversal("./files")
    return {"message": "All files doxified."}
