import { DeleteCustomerService } from "../services/DeleteCustomerService";
import { FastifyRequest, FastifyReply } from "fastify"


export class DeleteCustomerController {

    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id:string } 
        const deleteCostumerService = new DeleteCustomerService();

        const customer = await deleteCostumerService.execute({ id });

        reply.send(customer)
    } 

}
