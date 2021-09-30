import {Request,Response} from "express"
import{ListUserByEmailService} from "../services/ListUserByEmailService"

class ListUserByEmailController{

    async handle(request: Request, response: Response){
        const {user_email} = request.body

        const listUserByEmailService = new ListUserByEmailService()

        const user = await listUserByEmailService.execute(user_email)

        return response.json(user)
    }

}

export {ListUserByEmailController}