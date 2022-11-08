//http sirve para crear el servidor HTTP= HyperText Tranfer Protocol
const http = require("http");
//fs sirve para manejar archivos FS = File System
const fs = require("fs");

//Agregamos configuraciones iniciales
const PORT = 3000;

//LEER DE FORMA SÍNCRONA
//var html = fs.readFileSync("./index.html")
// http.createServer((req, res)=>{
//     res.write(html)  //Esto envía al navegador el archivo
//     res.end()        //Esto termina el envío al navegador (evita que quede cargando)
// }).listen(3000)

//LEER DE FORMA ASÍNCRONA

http.createServer((req, res)=>{
        fs.readFile("./servers_node/index.html", (err, html)=>{
        //res.writeHead(200,{"Content-Type":"text/html"})
        //res.write(JSON.stringify({"Nombre":"Carlos", "Apellido":"Herrera"}))
        res.write(html);  //Esto envía al navegador el archivo
        //res.write("<h1>Segundo html</h1>") //Write escribe debajo de lo que ya está escrito en el navegador
        res.end();        //Esto termina el envío al navegador (evita que quede cargando)
    })
    }).listen(PORT,()=>{
        console.log(`Servidor corriendo en el puerto ${PORT}`);
})
/*
create server crea el servidor
req = petición (request)
res = respuesta (response)
listen permite abrir el puerto
*/

/*TIPOS DE Content-Type
- application/json
- text/html
- text/css
- text/csv
- text/calendar
- image/gif
- image/x-icon
- image/jpeg
- image/webp
- image/tiff
- image/svg+xml
- video/x-msvideo
- video/mpeg
- video/ogg
- video/webm
- video/3gpp
- application/zip
- application/xml
- application/pdf
*/
