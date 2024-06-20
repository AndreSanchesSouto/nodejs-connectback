import prismaClient from "../prisma/index";

interface DeleteCustomerData {
    id: string
}

class DeleteCustomerService {

    async execute({ id }: DeleteCustomerData) {
        if(!id) { throw new Error("Sem ID") }
        
        const customer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })

        if(!customer) {
            throw new Error("Cliente não existe");
        }

        await prismaClient.customer.delete({
            where: {
                id: customer.id
            }
        })

        return { message: "Deletado com sucesso" }
    }


}

export { DeleteCustomerService }