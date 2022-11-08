//requerimientos
const http = require("http");

//Creación del servidor
const server= http.createServer((request, response)=>{
    response.statusCode=200;
    //response.setHeader("Content-Type", "text/html");
    response.end("<h1>Hola Mundo</h1>");
})

//Configuración del servidor
server.listen(3000,()=>{
    console.log("Servidor corriendo en el puerto 3000");
})

