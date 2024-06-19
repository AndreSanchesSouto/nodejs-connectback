import prismaClient from "../prisma/index";

interface DeleteCustomerData {
    id: string
}

class DeleteCustomerService {

    async execute({ id }: DeleteCustomerData) {
        if(!id) { throw new Error("Sem ID") }
    }



    const customer = await prismaClient.customer.findFirst({
        where: {
            id: 
        }
      })
}

export { DeleteCustomerService }