import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { CreateCustomerController } from "./controllers/CreateCustomerController"
import { ListCustomersController } from './controllers/ListCustomersController';

export async function routes(server: FastifyInstance, options: FastifyPluginOptions) {

    server.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })

    server.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply); 
    }) 

    server.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomersController().hendle(request, reply);
    })
}
