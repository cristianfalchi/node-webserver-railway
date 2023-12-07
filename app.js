const express = require('express');
const hbs = require('hbs');
require('dotenv').config(); //Para establecer las variables de entorno

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
      nombre: 'Cristian Falchi',
      titulo: 'Curso de Node'
    });
  })

  app.get('/generic', (req, res) => {

    res.render('generic', {
      nombre: 'Cristian Falchi',
      titulo: 'Curso de Node'
    });

  })

  app.get('/elements', (req, res) => {

    res.render('elements', {
      nombre: 'Cristian Falchi',
      titulo: 'Curso de Node'
    });

  })

  // Cuando no encuentra un manejador para la ruta
  app.get('*', (req, res) => {

    // res.send('public/404.index.html')
    res.sendFile(__dirname + '/public/404.html');

  })


  app.listen(port, () => {

    console.log(`Example app listening on port ${port}`);
    
  })