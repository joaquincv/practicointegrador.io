function calcularTotal() {
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var categoria = document.getElementById("categoria").value;
    var total;

    if (cantidad < 0) {
        total = "La cantidad ingresada es incorrecta";
    } else if (categoria === "1") {
      total = 200 * cantidad;
    } else if (categoria === "2") {
      total = (200 - ((200 * 80) / 100)) * cantidad;
    } else if (categoria === "3") {
      total = (200 - ((200 * 50) / 100)) * cantidad;
    } else {
      total = (200 - ((200 * 15) / 100)) * cantidad;
    } 

    document.getElementById("resultado").value = "Total a Pagar: $ " + total;
  }

function borrarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("email").value = "";
  document.getElementById("cantidad").value = "";
  document.getElementById("categoria").value = "";
  document.getElementById("resultado").value = "";
}