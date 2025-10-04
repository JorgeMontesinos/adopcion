import MascotasSchema from "../schemas/mascotas.js"
import mongoose from "mongoose"

class mascotasModel{
    constructor(){}

    async create(mascota){
          return await MascotasSchema.create(mascota)
    }
    async getAll(){
         return await MascotasSchema.find()
    }
    async getOne(id){
         return await MascotasSchema.findById(id)
    }
    async update(id,mascota){
            
         return await MascotasSchema.findByIdAndUpdate({_id:new mongoose.Types.ObjectId(id)},mascota,{new:true})
    }
    async delete(id){
            
         return await MascotasSchema.findByIdAndDelete({_id:new mongoose.Types.ObjectId(id)})
    }
}export default new mascotasModel()