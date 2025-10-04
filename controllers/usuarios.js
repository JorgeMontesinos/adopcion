import usuariosModel from "../models/usuarios.js";
import bcrypt from "bcrypt";
import { generarToken} from "../helpers/autenticacion.js";


class usuariosControllers{
    constructor(){}

    
    async register(req,res)    {
        try {
            const {email,nombre,telefono,clave} = req.body;
            
            const usuarioExiste = await usuariosModel.getOne({ email });
            if(usuarioExiste){
                return res.status(400).json({error:"Usuario ya existe"});
            }

            const claveEncryptada = await bcrypt.hash(clave, 10);

            const data =await usuariosModel.create({
                email,
                nombre,
                telefono,
                clave:claveEncryptada
            });
            res.status(201).json(data);
        } catch (error) {
            console.log(error);
            res.status(503).send(error);
        }
    }
   
    async login(req,res){
        const {email,clave}=req.body;
     
        const usuarioExiste=await usuariosModel.getOne({ email});

        if (!usuarioExiste){
            return res.status(400).json({error:"el usuario  no existe"});
        }

        const claveValida= await  bcrypt.compare(clave,usuarioExiste.clave);
        if (!claveValida){
            return res.status(400).json({error:"clave no valida"});
        }

        const token = generarToken(email)
       
       
        return res.status(200).json({msg:"usuario autenticado",token});
    }

     async profile(req, res) {
        try {
            const data = await usuariosModel.getOne({ email: req.emailConectado });
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
}
export default new usuariosControllers();