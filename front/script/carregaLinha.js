$(document).ready(function() {
    $("#linkListarProdutos").click(function(){
        $.ajax({
            url: 'http://localhost:5000/listar_produtos',
            method: 'GET',
            dataType: "json",
            sucess: listar_produtos,
            error: function(){
                alert("Erro nos dados")
            }

        })
        
        function listar_produtos(produtos){
            linhas = " "
            for(var i in produtos){
                lin ="<tr>"+
                "<th>"+ produtos[i].nome +"</th>"+
                "<th>"+ produtos[i].preco +"</th>"+
                "<th>"+ produtos[i].qtd +"</th>"+
                "</tr>"
                linhas = linhas + lin;
            }
            $("#corpoTabelaProdutos").html(linhas);
        }
    })     
});