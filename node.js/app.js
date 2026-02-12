const server = require("./server");
const router = require("./router");
const handlers = require("./handlers");

const handle = {
  "/": handlers.inicio,
  "/saludo": handlers.saludo,
  "/productos": handlers.productos,
  "/producto": handlers.producto,
  "/clientes": handlers.clientes,
  "/cliente": handlers.cliente,
  "/info": handlers.info
};

server.iniciar(router.route, handle);


