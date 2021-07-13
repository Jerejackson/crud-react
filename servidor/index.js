const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql')

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'prueba-react'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/crm", (req, res) =>{
  const sqlSelect = "SELECT * FROM usuario";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/crm/new_client/insert", (req, res) => {

  const nombre = req.body.txtNombre
  const documento = req.body.txtDocumento  
  const fechaNac = req.body.txtFechaNac
  const email = req.body.txtEmail  
  
  const sqlInsert = "INSERT INTO usuario (identificacion, nombre, email, fechaNac, fechaCreacion) VALUES (?,?,?,?,NOW());";
  db.query(sqlInsert, [documento, nombre, email, fechaNac, null], (err, result) => {
    console.log(result);
  });
});

app.delete("/crm/delete/:id", (req, res) =>{
  const cod = req.params.id;
  const sqlDelete = "Delete from usuario WHERE identificacion = ?";
  db.query(sqlDelete, cod, (err, result) => {
    if(err) console.log("Error al eliminar: " + err);
  });

});

app.put("/crm/edit_client/update", (req, res) =>{
  const cod = parseInt(req.body.txtDocumento);
  const nombre = req.body.txtNombre
  const fechaNac = req.body.txtFechaNac
  const fechaCreacion = req.body.txtFechaCreacion
  const email = req.body.txtEmail  

  const sqlUpdate = "Update usuario SET nombre = ?, email = ?, fechaNac = ?, fechaCreacion = ? WHERE identificacion = ?";
  db.query(sqlUpdate, [nombre, email, fechaNac, fechaCreacion, cod], (err, result) => {
    if(err) console.log("Error al Actualizar: " + err);
  });
});


app.listen(3001, () => {
  console.log("corriendo en el puerto 3001");
});
