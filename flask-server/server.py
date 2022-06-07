from flask import Flask, request, jsonify, Response
import pandas as pd
import json

app = Flask(__name__)

#members API route

@app.route("/api/year", methods=['GET', 'POST', 'DELETE'])
def year():
    df=pd.read_csv('dataset_world_bank_220119.csv')
    return json.dumps(df)
    return{"year": ["1960", "1970", "1980","1990"]}


@app.route("/api/ruralpopulation/<country>", methods=['GET', 'POST', 'DELETE'])
def percentage(country):
    # gets all %

    
    if country == "":
        return json.dumps([])

    if request.method=='GET':

        df = pd.read_csv('dataset_world_bank_220119.csv')
        di = df.to_dict()  
        temp = (dict((v, k) for k, v in di["Country Name"].items()))
        data = []

        for x in range(1960,2017, 1):
         data.append((f'"{x}"', di[str(x)][temp[country]]))
           
        return json.dumps(data)
        

        #dict[percentage]["1960"] 
if __name__=="__main__":
    app.run(debug=True)