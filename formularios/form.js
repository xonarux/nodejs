const http = require("http")
const fs = require("fs")

//Agregamos configuraciones iniciales
const PORT = 3000;
const HOST = "http://localhost"

//Creamos el servidor
http.createServer((req, res)=>{    
    fs.readFile("./formularios/index.html", (err, html)=>{
        var html_string = html.toString()
        var arreglo_parametros=[], parametros={}
        var variables = html_string.match(/[^\{\}]+(?=\})/g)
        
        //variables = [nombre]
        if(req.url.indexOf("?")>0) {
            var url_data= req.url.split("?")
            //url_data = ["/", "nombre=Node"]
            var arreglo_parametros = url_data[1].split("&")
            //arreglo_parametros = ["nombre=Node"]
        }
        else{parametros["nombre"]=""}

        for (let i = 0; i < arreglo_parametros.length; i++) {
            var parametro = arreglo_parametros[i]
            //parametro = "nombre=Node"
            var param_data = parametro.split("=")
            //param_data = ["nombre", "Node"]
            parametros[param_data[0]]=param_data[1]
            //parametros = {nombre: "Node"}  
        }

        for (let i = 0; i < variables.length; i++) {
            var variable = variables[i]
            //variable = "donde" 
            html_string = html_string.replace("{"+variables[i]+"}",parametros[variable])
                                             // {donde} <- Node
        }

        res.writeHeader(200,{"Content-Type":"text/html"})    
        res.write(html_string);  
        res.end();        
    })
        
    }).listen(PORT,()=>{
        console.log(`Servidor corriendo en ${HOST}:${PORT}`);
})
