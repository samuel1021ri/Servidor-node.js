const http = require("http");

function iniciar(route, handle) {
  function onRequest(req, res) {
    const baseURL = `http://${req.headers.host}`;
    const myURL = new URL(req.url, baseURL);

    // Normalizar la ruta
    let pathname = myURL.pathname;

    // Quitar barras repetidas al final
    pathname = pathname.replace(/\/+$/, "");

    // Si queda vacío, es la ruta raíz
    if (pathname === "") pathname = "/";

    // Convertir los parámetros de búsqueda a objeto normal
    const query = Object.fromEntries(myURL.searchParams);

    console.log("Request for '" + pathname + "' received."); // debug

    // Llamamos al router
    route(pathname, handle, res, query);
  }

  http.createServer(onRequest).listen(3000, () => {
    console.log("Servidor activo en http://localhost:3000");
  });
}

module.exports = { iniciar };


