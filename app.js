import "dotenv/config"
import bodyParser from "body-parser"
import express  from "express"
import routesMascotas from "./routes/mascotas.js"
import routesUsuarios from "./routes/usuarios.js"
import dbClient from "./config/dbClient.js"
import cors from "cors"
const PORT=process.env.PORT || 3000

const app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors())



/*
{ origin:"https://adopcion-2p70.onrender.com", //"http://localhost:5173",
  methods: "GET,POST,PUT,DELETE"
 }
*/

app.use("/mascotas",routesMascotas)
app.use("/users",routesUsuarios)
try {
    app.listen(PORT,()=>console.log("server escuchando en el puerto "+PORT))
} catch (error) {
    
}