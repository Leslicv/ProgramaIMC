const nombre = localStorage.getItem("nombreUsuario");

if (nombre) {
  document.getElementById("saludo").textContent =
    "Bienvenido(a), " + nombre + " al programa IMC Saludable";
}

let ultimoIMC = "";
let ultimaCategoria = "";
let ultimaAgua = "";

function calcularIMC() {
  const peso = parseFloat(document.getElementById("pesoIMC").value);
  const altura = parseFloat(document.getElementById("alturaIMC").value);
  const resultado = document.getElementById("resultadoIMC");

  if (!peso || !altura) {
    resultado.innerHTML = "Ingresa tu peso y altura.";
    return;
  }

  const imc = peso / (altura * altura);
  let categoria = "";

  if (imc < 18.5) {
    categoria = "Bajo peso";
  } else if (imc < 25) {
    categoria = "Peso normal";
  } else if (imc < 30) {
    categoria = "Sobrepeso";
  } else {
    categoria = "Obesidad";
  }

  ultimoIMC = imc.toFixed(2);
  ultimaCategoria = categoria;

  resultado.innerHTML = `
    <strong>Resultado:</strong> ${ultimoIMC}<br>
    <strong>Clasificación:</strong> ${categoria}
  `;
}

function calcularAgua() {
  const peso = parseFloat(document.getElementById("pesoAgua").value);
  const resultado = document.getElementById("resultadoAgua");

  if (!peso) {
    resultado.innerHTML = "Ingresa tu peso.";
    return;
  }

  const litros = peso * 0.035;
  const vasos = litros / 0.25;

  ultimaAgua = `${litros.toFixed(2)} litros / ${Math.round(vasos)} vasos`;

  resultado.innerHTML = `
    <strong>Recomendación:</strong> ${litros.toFixed(2)} litros diarios<br>
    <strong>Equivalente:</strong> ${Math.round(vasos)} vasos aproximadamente
  `;
}

function mostrarConsejo() {
  const consejos = [
    "Incluye una fruta en tu desayuno.",
    "Toma agua antes de consumir bebidas azucaradas.",
    "Camina entre 20 y 30 minutos al día.",
    "Duerme al menos 7 horas por noche.",
    "Agrega verduras a tu almuerzo.",
    "Evita comer muy tarde por la noche."
  ];

  const aleatorio = Math.floor(Math.random() * consejos.length);

  document.getElementById("resultadoConsejo").innerHTML =
    consejos[aleatorio];
}

function guardarResumen() {
  const tarjeta = document.getElementById("tarjetaResumen");

  if (!ultimoIMC && !ultimaAgua) {
    alert("Primero calcula tu IMC o tu agua diaria.");
    return;
  }

  const nombreUsuario = localStorage.getItem("nombreUsuario") || "Usuario";

  document.getElementById("nombreResumen").textContent =
    "Tarjeta saludable de " + nombreUsuario;

  document.getElementById("imcResumen").textContent =
    ultimoIMC || "No calculado";

  document.getElementById("categoriaResumen").textContent =
    ultimaCategoria || "No calculada";

  document.getElementById("aguaResumen").textContent =
    ultimaAgua || "No calculada";

  tarjeta.classList.remove("oculto");

  localStorage.setItem("ultimoIMC", ultimoIMC);
  localStorage.setItem("ultimaCategoria", ultimaCategoria);
  localStorage.setItem("ultimaAgua", ultimaAgua);
}

function cerrarSesion() {

  const confirmar = confirm(
    "¿Está seguro de que desea cerrar sesión?"
  );

  if (confirmar) {

    localStorage.removeItem("nombreUsuario");

    window.location.href = "login.html";
  }
}