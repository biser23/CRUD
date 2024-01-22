const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let usuarios = [
    { id: 1, nombre: 'Ryu', edad: 32, lugarProcedencia: 'Japón' },
    { id: 2, nombre: 'Chun-Li', edad: 29, lugarProcedencia: 'China' },
    { id: 3, nombre: 'Guile', edad: 35, lugarProcedencia: 'Estados Unidos' },
    { id: 4, nombre: 'Dhalsim', edad: 45, lugarProcedencia: 'India' },
    { id: 5, nombre: 'Blanka', edad: 32, lugarProcedencia: 'Brasil' },
];

 //CREATE
 app.get('/usuarios', (req, res) => {
    res.json(usuarios);
  });
  app.post('/usuarios', (req, res) => {
    const nuevoUsuario = {
      id: usuarios.length + 1,
      nombre: req.body.nombre,
    };
    usuarios.push(nuevoUsuario);
    res.redirect('/');
  });
  app.get('/usuarios/:nombre', (req, res) => {
    res.json(usuarios);
  });
  app.listen(3000, () => {
    console.log(`Express escuchando en http://localhost:${port}`);
  });

//READ
app.get('/', (req, res) => {
    res.send(`<h1>Lista de usuarios</h1>
    <ul>
    ${usuarios
      .map((usuario) => `<li>ID: ${usuario.id} | Nombre: ${usuario.nombre}</li>`)
      .join('')}
    </ul>
    <form action="/usuarios" method="post">
    <label for"nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre" required>
    <button type="submit">Agregar usuario</button>
    </form>
    <a href="/usuarios">Usuarios</a>
    `);
  });
 
   //UPDATE
 app.get('/usuarios', (req, res) => {
    res.json(usuarios);
  });
  app.get('/usuarios/:nombre', (req, res) => {
    res.json(usuarios);
  });