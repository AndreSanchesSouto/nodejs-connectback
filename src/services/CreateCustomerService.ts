import prismaClient from "../prisma";

interface CreateCustomerData {
    name: string,
    email: string,
    password: string
}

class CreateCustomerService {
     async execute({ name, email, password }: CreateCustomerData) {

        if (!name || !email || password) {
            console.log("name email e password estao faltando");
            
        }

        const costumer = await prismaClient.customer.create({
            data:{
                name,
                email,
                password,
                status: true
            }
        })
        return costumer
     }
}

export { CreateCustomerService };