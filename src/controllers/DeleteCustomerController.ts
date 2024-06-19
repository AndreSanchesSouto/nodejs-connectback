import { DeleteCustomerService } from "../services/DeleteCustomerService";
import { FastifyRequest, FastifyReply } from "fastify"

class DeleteCustomerController {

    async hendle(request: FastifyRequest, reply: FastifyReply) {
        const deleteCostumerService = new DeleteCustomerService(request);

        const customers = await deleteCostumerService.execute();

        reply.send(customers)
    } 

}
