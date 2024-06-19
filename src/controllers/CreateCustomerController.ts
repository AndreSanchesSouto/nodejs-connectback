import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService"

class CreateCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, email, password } = request.body as { name: string, email: string, password: string };
        
        const costumerService = new CreateCustomerService();
        const customer = await costumerService.execute({ name, email, password });

        reply.send(customer)
    }
}

export { CreateCustomerController }