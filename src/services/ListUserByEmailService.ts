import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"


class ListUserByEmailService{
    async execute(user_email:string){
        const usersRepositories = getCustomRepository(UsersRepositories)

        const email = await usersRepositories.find({
            where: {email:user_email}
        })

        if (email.length == 0){
            throw new Error("Email Inexistente!")
        }

        return email
    }

}

export{ListUserByEmailService}