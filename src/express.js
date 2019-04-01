const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const fs = require('fs')
 
const directorioPublic = path.join(__dirname, '../public');
const directorioPartials = path.join(__dirname, '../partials');

app.use(express.static(directorioPublic));
hbs.registerPartials(directorioPartials)

app.set('view engine','hbs');

app.get('/', (req,res) => {
  res.render('index');
});
 
app.get('/RegistroCoordinador', function (req, res) {
  res.render('RegistroCoordinador');
});

app.get('/RegistroUsuario', function (req, res) {
  
  res.render('RegistroUsuario');
});

app.get('/ListaCursos', function (req, res) {
  res.render('ListaCursos',{

    
  });
});

app.listen(3000, ()=>{
  console.log("Se lanzo") 
})