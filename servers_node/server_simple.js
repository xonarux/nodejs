const http = require("http");

const server= http.createServer((request, response)=>{
    response.statusCode=200;
    //response.setHeader("Content-Type", "text/html");
    response.end("<h1>Hola Mundo</h1>");
})

server.listen(3000,()=>{
    console.log("Servidor corriendo en el puerto 3000");
})

