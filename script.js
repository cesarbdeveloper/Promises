const log = document.getElementById("log");
const startBtn = document.getElementById("startBtn");

function prepararPlatillo(nombre, tiempo) {
  return new Promise((resolve) => {
    log.innerHTML += `<p>Preparando ${nombre}...</p>`;
    setTimeout(() => {
      log.innerHTML += `<p>${nombre} listo y entregado ✅</p>`;
      resolve();
    }, tiempo);
  });
}

function iniciarOrden() {
  log.innerHTML = ""; // Limpiar log
  prepararPlatillo("Bebida", 2000)
    .then(() => prepararPlatillo("Pizza", 3000))
    .then(() => prepararPlatillo("Postre", 1500))
    .then(() => {
      log.innerHTML += `<p><strong>✅ Orden completa entregada</strong></p>`;
      console.log("✅ Orden completa entregada");
    });
}

startBtn.addEventListener("click", iniciarOrden);