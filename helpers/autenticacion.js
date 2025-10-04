import "dotenv/config"
import jsonwebtoken from "jsonwebtoken"

export function generarToken(email){
        return jsonwebtoken.sign({email},process.env.JWT_CLAVE_SECRETA,{ expiresIn: '1h'})
}

export function verificarToken(req,res,next){
    const token = req.header('Authorization')?.replace('Bearer ','');

    if(!token){
        return res.status(401).json({error:"token requerido"});
    }

    try {
        const dataToken = jsonwebtoken.verify(token,process.env.JWT_CLAVE_SECRETA);
        req.emailConectado=dataToken.email;
        next();
    } catch (e) {
        return res.status(401).json({error:"token no valido"});
    }
}