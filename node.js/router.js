function route(pathname, handle, res, query) {
  console.log("Routing for: " + pathname); // Depuración
  if (handle[pathname]) {
    handle[pathname](res, query);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Ruta no encontrada");
  }
}

module.exports = { route };

