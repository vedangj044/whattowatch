from flask import Flask, request, redirect, jsonify
from flask_cors import CORS, cross_origin
from urllib.request import urlopen
import pandas as pd
from search import Trie
import json
import pickle
import requests as r

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})

t = Trie()
data = pd.read_csv("https://firebasestorage.googleapis.com/v0/b/aarambh-aider.appspot.com/o/images%2FdataFinalOutput.csv?alt=media", sep="\t")
keys = data["Title"].tolist()

with open("dataFinal.p", "rb") as ing:
    pi = pickle.load(ing)

t.formTrie(keys)

@app.route('/search', methods=['GET', 'POST'])
def suggestion():
    if request.method == 'POST':
        t.clearWordList()
        inr = request.json.get('key')
        if len(inr) > 0:
            di = {"response": t.printAutoSuggestions(inr)[:20]}
            return jsonify(di)
        return jsonify({"response": ""})


@app.route('/recommend', methods=['GET', 'POST'])
def switch():
    if request.method == 'POST':
        query = request.json.get('query')
        pos = data[data["Title"] == query].index.values

        url = "http://www.omdbapi.com/?apikey=e55be9b5&s="
        lit = pi["index"+str(pos[0])]
        dis = {}
        j = 0
        for i in lit[1:]:
            temp = data.iloc[i]
            dis[j] = {"title": temp["Title"], "poster": temp["Poster"]}
            if temp["Poster"] == "0":
                req = r.get(url + temp["Title"])
                print(req)
                l1 = eval(req.content)
                try:
                    if l1["Search"][0]["Poster"] == "N/A":
                        dis[j]["poster"] = "https://linnea.com.ar/wp-content/uploads/2018/09/404PosterNotFoundReverse.jpg"
                    else:
                        dis[j]["poster"] = l1["Search"][0]["Poster"]
                except Exception as e:
                    dis[j]["poster"] = "https://linnea.com.ar/wp-content/uploads/2018/09/404PosterNotFoundReverse.jpg"

            j += 1

        return jsonify(dis)


if __name__ == "__main__":
    app.run(debug=True)
