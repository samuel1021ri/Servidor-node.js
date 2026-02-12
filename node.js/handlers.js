const productosList = [
  { id: 1, nombre: "Laptop Gamer Xtreme", precio: 1500 },
  { id: 2, nombre: "Smartphone Ultra 12", precio: 999 },
  { id: 3, nombre: "Auriculares Inalámbricos Pro", precio: 199 },
  { id: 4, nombre: "Monitor 27\" 4K HDR", precio: 450 },
  { id: 5, nombre: "Teclado Mecánico RGB", precio: 120 },
  { id: 6, nombre: "Mouse Gaming Óptico", precio: 60 },
  { id: 7, nombre: "Disco SSD 1TB", precio: 150 },
  { id: 8, nombre: "Router WiFi 6", precio: 200 },
  { id: 9, nombre: "Tablet 10\" HD", precio: 300 },
  { id: 10, nombre: "Impresora Multifunción", precio: 250 },
  { id: 11, nombre: "Smartwatch Serie 5", precio: 350 },
  { id: 12, nombre: "Cámara Digital 24MP", precio: 550 },
  { id: 13, nombre: "Micrófono USB Studio", precio: 180 },
  { id: 14, nombre: "Parlantes Bluetooth", precio: 90 },
  { id: 15, nombre: "Proyector HD", precio: 400 },
  { id: 16, nombre: "Disco Duro Externo 2TB", precio: 130 },
  { id: 17, nombre: "Laptop Ultraligera 14\"", precio: 1100 },
  { id: 18, nombre: "Cargador Rápido USB-C", precio: 35 },
  { id: 19, nombre: "Smartphone Económico", precio: 250 },
  { id: 20, nombre: "Tablet Gráfica Wacom", precio: 600 },
  { id: 21, nombre: "Auriculares Gaming 7.1", precio: 220 },
  { id: 22, nombre: "Teclado Inalámbrico", precio: 80 },
  { id: 23, nombre: "Mousepad XL", precio: 25 },
  { id: 24, nombre: "Webcam Full HD", precio: 75 },
  { id: 25, nombre: "Altavoz Inteligente", precio: 150 }
];

const clientesList = [
  { id: 1, nombre: "Juan Pérez", email: "juanp@example.com" },
  { id: 2, nombre: "María Gómez", email: "mariag@example.com" },
  { id: 3, nombre: "Pedro Sánchez", email: "pedros@example.com" },
  { id: 4, nombre: "Ana Torres", email: "anat@example.com" },
  { id: 5, nombre: "Luis Fernández", email: "luisf@example.com" },
  { id: 6, nombre: "Carla Rodríguez", email: "carlar@example.com" },
  { id: 7, nombre: "Diego Martínez", email: "diegom@example.com" },
  { id: 8, nombre: "Sofía Morales", email: "sofiam@example.com" },
  { id: 9, nombre: "Jorge Ramírez", email: "jorger@example.com" },
  { id: 10, nombre: "Lucía Herrera", email: "luciah@example.com" },
  { id: 11, nombre: "Andrés Castillo", email: "andresc@example.com" },
  { id: 12, nombre: "Paula Jiménez", email: "paulaj@example.com" },
  { id: 13, nombre: "Ricardo Díaz", email: "ricardod@example.com" },
  { id: 14, nombre: "Verónica López", email: "verol@example.com" },
  { id: 15, nombre: "Fernando Gómez", email: "fernandog@example.com" },
  { id: 16, nombre: "Natalia Ruiz", email: "nataliar@example.com" },
  { id: 17, nombre: "Carlos Mendoza", email: "carlosm@example.com" },
  { id: 18, nombre: "Paola Castro", email: "paolac@example.com" },
  { id: 19, nombre: "Mario Vázquez", email: "mariov@example.com" },
  { id: 20, nombre: "Isabel Serrano", email: "isabels@example.com" },
  { id: 21, nombre: "Héctor Rojas", email: "hectorr@example.com" },
  { id: 22, nombre: "Claudia Ortiz", email: "claudiao@example.com" },
  { id: 23, nombre: "Miguel Flores", email: "miguelf@example.com" },
  { id: 24, nombre: "Daniela Acosta", email: "danielaa@example.com" },
  { id: 25, nombre: "Esteban Cortés", email: "estebanc@example.com" }
];

// ================== HTML Helpers ==================
function renderHTML(title, bodyContent) {
  return `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>${title}</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-100 p-8">
    ${bodyContent}
  </body>
  </html>
  `;
}

// ================== Productos ==================
function productos(res) {
  let body = `<h1 class="text-3xl font-bold mb-6">Lista de Productos</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  `;
  productosList.forEach(p => {
    body += `
      <div class="bg-white p-4 rounded shadow hover:shadow-lg transition">
        <h2 class="text-xl font-semibold mb-2">${p.nombre}</h2>
        <p class="text-gray-700">Precio: $${p.precio}</p>
        <p class="text-gray-500 text-sm">ID: ${p.id}</p>
      </div>
    `;
  });
  body += `</div>`;
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(renderHTML("Productos", body));
}

function producto(res, query) {
  const id = parseInt(query.id);
  const p = productosList.find(prod => prod.id === id);
  let body;
  if (p) {
    body = `<h1 class="text-3xl font-bold mb-4">${p.nombre}</h1>
            <p class="text-gray-700">Precio: $${p.precio}</p>
            <p class="text-gray-500">ID: ${p.id}</p>`;
  } else {
    body = `<p class="text-red-500 font-bold">Producto no encontrado</p>`;
  }
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(renderHTML("Producto", body));
}

// ================== Clientes ==================
function clientes(res) {
  let body = `<h1 class="text-3xl font-bold mb-6">Lista de Clientes</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  `;
  clientesList.forEach(c => {
    body += `
      <div class="bg-white p-4 rounded shadow hover:shadow-lg transition">
        <h2 class="text-xl font-semibold mb-2">${c.nombre}</h2>
        <p class="text-gray-700">Email: ${c.email}</p>
        <p class="text-gray-500 text-sm">ID: ${c.id}</p>
      </div>
    `;
  });
  body += `</div>`;
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(renderHTML("Clientes", body));
}

function cliente(res, query) {
  const id = parseInt(query.id);
  const c = clientesList.find(cli => cli.id === id);
  let body;
  if (c) {
    body = `<h1 class="text-3xl font-bold mb-4">${c.nombre}</h1>
            <p class="text-gray-700">Email: ${c.email}</p>
            <p class="text-gray-500">ID: ${c.id}</p>`;
  } else {
    body = `<p class="text-red-500 font-bold">Cliente no encontrado</p>`;
  }
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(renderHTML("Cliente", body));
}

// ================== Otros ==================
function inicio(res) {
  const body = `<h1 class="text-4xl font-bold mb-4">Página de Inicio</h1>
                <p class="text-gray-700">Bienvenido al sistema</p>`;
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(renderHTML("Inicio", body));
}

function saludo(res, query) {
  const nombre = query.nombre || "usuario";
  const body = `<h1 class="text-3xl font-bold mb-4">Hola, ${nombre}!</h1>`;
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(renderHTML("Saludo", body));
}

function info(res) {
  const body = `<h1 class="text-3xl font-bold mb-4">Información del sistema</h1>`;
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(renderHTML("Info", body));
}

// ================== Exportar ==================
module.exports = {
  productos,
  producto,
  clientes,
  cliente,
  inicio,
  saludo,
  info
};
