import express from  "express"
import usuariosControllers from "../controllers/usuarios.js"
import { verificarToken } from "../helpers/autenticacion.js"
const route = express.Router()

route.post("/register",usuariosControllers.register)
route.post("/login",usuariosControllers.login)
route.get("/profile",verificarToken,usuariosControllers.profile)


export default route