import { ListCustomersService } from "../services/ListCustomersService"; 
import { FastifyRequest, FastifyReply } from "fastify";

class ListCustomersController {

    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listCostumerService = new ListCustomersService();

        const customers = await listCostumerService.execute();

        reply.send(customers)
    } 

}

export { ListCustomersController }