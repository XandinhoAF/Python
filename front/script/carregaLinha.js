$( document ).ready(function() {
    $.ajax({
        url: 'http://127.0.0.1:5000/produtos',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type':'application/json'
        },
        type: "GET",
        dataType: "json"
    }).done((data) => {
        for(i = 0; i < data.length; i++){
            let row = "<tr>";
            row = row.concat("<td>" + data[i].nome + "</td>");
            row = row.concat("<td>" + data[i].preco + "</td>");
            row = row.concat("<td>" + data[i].qtd + "</td>");
            
            row = row.concat("</tr>");
            $("#listaProduto").append(row);
        }
    });
});