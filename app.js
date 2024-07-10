const caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;

function validarTexto(textoIngresado) {
  if (textoIngresado.match(caracteres)) {
    alert(
      "El texto ingresado no debe tener caracteres especiales"
    );
    return false;
  } else if (textoIngresado === "") {
    alert("Ingresa un texto para ser encriptado");
    return false;
  } else {
    return true;
  }
}

const llaves = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };

function encriptarTexto(textoIngresado) {
  let textoEncriptado = "";
  for (obj in llaves) {
    textoEncriptado = textoIngresado.replaceAll(obj, llaves[obj]);
    textoIngresado = textoEncriptado;
  }
  return textoEncriptado;
}

const botonEncriptar = document.getElementById("botonEncriptar");
const textoInput = document.getElementById("textoInput");
const resultado = document.getElementById("resultado");

const contenedorVacio = document.getElementById("contenedorVacio");
const contenedorResultado = document.getElementById("contenedorResultado");

function visibilidadTexto(visibilidad) {
  if (visibilidad === "mostrar") {
    contenedorVacio.style.display = "none";
    contenedorResultado.style.display = "flex";
  } else if (visibilidad === "ocultar") {
    contenedorVacio.style.display = "flex";
    contenedorResultado.style.display = "none";
  }
}

botonEncriptar.addEventListener("click", function () {
  const textoIngresado = textoInput.value.toLowerCase();
  if (validarTexto(textoIngresado)) {
    const textoEncriptado = encriptarTexto(textoIngresado);
    visibilidadTexto("mostrar");
    resultado.innerText = textoEncriptado;
  } else {
    visibilidadTexto("ocultar");
  }
});

function desencriptarTexto(textoIngresado) {
  let textoDesencriptado = "";
  for (obj in llaves) {
    textoDesencriptado = textoIngresado.replaceAll(llaves[obj], obj);
    textoIngresado = textoDesencriptado;
  }
  return textoDesencriptado;
}

const botonDesencriptar = document.getElementById("botonDesencriptar");

botonDesencriptar.addEventListener("click", function () {
  const textoIngresado = textoInput.value.toLowerCase();
  if (validarTexto(textoIngresado)) {
    const textoDesencriptado = desencriptarTexto(textoIngresado);
    visibilidadTexto("mostrar");
    resultado.innerText = textoDesencriptado;
  } else {
    visibilidadTexto("ocultar");
  }
});

const botonCopiar = document.getElementById("botonCopiar");

botonCopiar.addEventListener("click", function () {
  const textoResultado = resultado.innerText;
  navigator.clipboard.writeText(textoResultado);
});
