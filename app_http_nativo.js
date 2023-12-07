const http = require('http');


http.createServer((req, res) => {
    
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});

    //res.writeHead(200, {'Content-Type': 'text/plain'});
    //res.writeHead(200, {'Content-Type': 'application/json'});

    // const persona = {
    //     id: 1,
    //     nombre: 'Cristian'
    // }

    // res.write(JSON.stringify(persona));

    res.write('id, nombre\n');
    res.write('1, fernando\n');
    res.write('2, vanesa\n');
    res.write('3, graciela\n');
    res.write('4, morena\n');

    res.end(); // HAY QUE DECIRLE A NODE QUE YA TERMINE DE ESCRIBIR MI RESPUESTA

})
.listen(8080); 

console.log('Escuchando en el puerto 8080');