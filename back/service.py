from config import *
from mybd import Produtos
from flask import jsonify

def getProdutos():
    
    return convertListToJson(db.session.query(Produtos).all())

def convertListToJson(list):
    temp = []
    for e in list:
        temp.append(e.json())
    return jsonify(temp)