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

  // Simular 15% de probabilidad de error
  const probabilidadError = Math.random();
  if (probabilidadError < 0.7) {
    log.innerHTML = `<p style="color: red;"><strong>❌ Ocurrió un error. Inicie su pedido nuevamente.</strong></p>`;
    console.error("❌ Error en la orden. Reinicie.");
    return;
  }

  prepararPlatillo("Bebida", 2000)
    .then(() => prepararPlatillo("Pizza", 3000))
    .then(() => prepararPlatillo("Postre", 1500))
    .then(() => {
      log.innerHTML += `<p><strong>✅ Orden completa entregada</strong></p>`;
      console.log("✅ Orden completa entregada");
    });
}

startBtn.addEventListener("click", iniciarOrden);
