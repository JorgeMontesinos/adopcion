import mascotasControllers from "../controllers/mascotas.js"
import express from "express"

const route = express.Router()

route.post("/",mascotasControllers.create)
route.get("/",mascotasControllers.getAll)
route.get("/:id",mascotasControllers.getOne)
route.put("/:id",mascotasControllers.update)
route.delete("/:id",mascotasControllers.delete)

export default route