from config import *
from service import getProdutos

@app.route("/produtos")
def padrao():
    return getProdutos()

app.run(debug=True)