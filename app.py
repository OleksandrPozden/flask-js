from flask import Flask, render_template, jsonify
from data import DATA
import os

app = Flask(
    __name__, 
    template_folder=os.getcwd(), 
    static_folder=os.getcwd(),
    static_url_path=''
)

@app.route("/")
def hello_world():
    return render_template("index.html")

@app.route("/api/data")
def get_data():
    return jsonify(DATA)

if __name__=="__main__":
    app.run()