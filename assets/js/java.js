//Click aparece y desparece borde
const borde = document.querySelector("#portada");
function click() {
  if (borde.style.borderStyle != "solid") {
    borde.style.borderStyle = "solid";
    borde.style.borderColor = "red";
    borde.style.borderWidth = "2px";
  } else {
    borde.style.borderStyle = "none";
  }
}
borde.addEventListener("click", click);

//Suma de stickers
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  const sticker1 = document.querySelector("#sticker1").value;
  const sticker2 = document.querySelector("#sticker2").value;
  const sticker3 = document.querySelector("#sticker3").value;

  const total = +sticker1 + +sticker2 + +sticker3;

  if (total <= 10) {
    document.querySelector("#totalSticker").innerHTML =
      "Tus sticker son: " + total + " en total.";
  } else document.querySelector("#totalSticker").innerHTML = "Llevas demasiados stickers";
});

//Seccion password

const boton = document.querySelector ("#ingresar");
const verificar = document.querySelector ("#texto");

boton.addEventListener("click", () => {


    const primer = document.querySelector("#digito1").value;
    const segundo = document.querySelector("#digito2").value;
    const tercero = document.querySelector("#digito3").value;
    
    const clave = primer + segundo + tercero;

if (clave === "911") {

verificar.innerHTML = "Muy bien, Bienvenid@";
}
else if (clave === "714") {

verificar.innerHTML = "Bienvenid@";
}
else {
verificar.innerHTML = "Acceso denegado";
}

})