//Funcion para mostrar lista de amigos
var listaAmigos = () => {
    $("#lista").empty();
    $.get("http://localhost:5000/amigos/", function (data) {
       for (let i = 0; i < data.length; i++) {
        $("#lista").append(`<li> ${data[i].name} </li>`);
       }
    });
}
//Evento para mostrar lista de amigos
$('#boton').click(listaAmigos);
//Funcion para buscar amigo por id 
$('#search').click(function () {
    var id = $("#input").val();
    $.get(`http://localhost:5000/amigos/${id}`, function (data) {
      $("#amigo").text(data.name);
    });
  });
// Funcion para eliminar amigo por id 
  $('#delete').click(function () {
    var idDelete = $("#inputDelete").val();
    $.ajax({
        url: `http://localhost:5000/amigos/${idDelete}`,
        type:  "DELETE",
        success: () => {
            $("#success").text("Amigo borrado con exito");
            listaAmigos();
        }
    });
  });