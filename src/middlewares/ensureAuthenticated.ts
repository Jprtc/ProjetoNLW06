import {Request,Response,NextFunction} from "express";
import {verify} from "jsonwebtoken"

interface IPayLoad{
    sub:string;
}

export function ensureAuthenticated(request: Request, response: Response,next: NextFunction){

   const authToken = request.headers.authorization

   if(!authToken){
       return response.status(401).end();
   }

   const [,token] = authToken.split(" ")

    try{
    const {sub} = verify(token,"78dfb4895cac34e1df0b348e9909f549") as IPayLoad
    
    request.user_id = sub;
    //console.log(decode)
    return next()
    }catch(err){
        return response.status(401).end();
    }


   
   //console.log(token)

   
}