import mongoose  from "mongoose";
import UsuariosModel from '../schemas/usuarios.js';


class usuariosModel{

    async create(usuario){
        return await UsuariosModel.create(usuario);
    }

    async getAll(){
        return await UsuariosModel.find();
    }

    async getOneById(id){
       return await UsuariosModel.findById(id);
    }
    
    async update(id,usuario){
        return await UsuariosModel.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, usuario, { new: true });
    }

      async delete(id){
        return await UsuariosModel.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) });
    }

    async getOne(filtro) {
        return await UsuariosModel.findOne(filtro);
    }
}
export default new usuariosModel;