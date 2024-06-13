import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';

export async function routes(server: FastifyInstance, options: FastifyPluginOptions) {

    server.get("/uau", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })

}