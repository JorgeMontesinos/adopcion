import "dotenv/config"
import mongoose from "mongoose"

class dbClient{
    constructor(){
        
        this.conectarDB()
    }
    async conectarDB(queryString){
        try {
            queryString=`mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/adopcion?retryWrites=true&w=majority`
            await mongoose.connect(queryString)
            console.log("mongoDB ATLAS escuchando")   
        } catch (e) {
            console.log(e)
        } 
    }
    async desconectarDB(){
        try {
            await mongoose.diconnect()
        } catch (e) {
            console.log(e)
        } 
    }
    
}
export default new dbClient()