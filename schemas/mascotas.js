import mongoose from "mongoose";

const mascotaSchema = new mongoose.Schema({
        nombre:{
            type:String,
            required:true,
            unique:true
        },
        tipo:{
            type:String,
            required:true,
            enum:["perro","gato","conejo"]
        },
        raza:{
            type:String
        },
        edad:{
            type:Number,
            required:true,
            min:[0,"minimo"],
            max:[30,"maximo"]
        },
        descripcion:{
            type:String
        },
        adoptado:{
            type:Boolean,
            default:false
        }
    },
    {
        timestamps:true
    }
)
export default mongoose.model("mascotas",mascotaSchema)