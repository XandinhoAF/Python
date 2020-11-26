from config import *

class Produtos(db.sistema):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(30))
    preco = db.Column(db.Real)
    qtd = db.Column(db.Integer)
    def json(self):
        return {
            "id": self.id,
            "nome": self.nome,
            "preco": self.preco,
            "qtd": self.qtd,

        }

    #CREATE TABLE produto(id INTEGER PRIMARY KEY, nome VARCHAR(30) NOT NULL, preco REAL NOT NULL, qtd INTEGER NOT NULL );
    # select * from produto;
    # 1|leite|2.39|1
    # 2|óleo|6.49|1
    # 3|pipoca|0.5|5