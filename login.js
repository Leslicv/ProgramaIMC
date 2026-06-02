function ingresar() {
  const nombre = document.getElementById("nombreUsuario").value.trim();

  if (nombre === "") {
    alert("Por favor, ingrese su nombre");
    return;
  }

  localStorage.setItem("nombreUsuario", nombre);

  window.location.href = "inicio.html";
}