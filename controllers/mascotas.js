
import MascotaModel from "../models/mascotas.js"
class mascotasControllers{
    constructor(){}

    async create(req,res){
        try {
                const data=await MascotaModel.create(req.body)
                res.status(200).json(data)
        } catch (e) {
            res.status(400).send("--req.body-->>",e)
        }
    }
    async getAll(req,res){
        try {
                const data=await MascotaModel.getAll({})
                res.status(200).json(data)
        } catch (e) {
            res.status(400).send(e)
        }
    }
    async getOne(req,res){
          try {
                const {id}=req.params
                console.log("--params--id-->",id)

                const data=await MascotaModel.getOne(id)
                console.log("---data-->",data)
                res.status(200).json(data)
        } catch (e) {
            res.status(400).send(e)
        }
    }
    async update(req,res){
        try {
                const {id}=req.params
                const data=await MascotaModel.update(id,req.body)
                res.status(200).json(data)
        } catch (e) {
            res.status(400).send(e)
        }
    }
    async delete(req,res){
        try {
                const {id}=req.params
                const data=await MascotaModel.delete(id)
                res.status(200).json(data)
        } catch (e) {
            res.status(400).send(e)
        }
    }
}
export default new mascotasControllers()