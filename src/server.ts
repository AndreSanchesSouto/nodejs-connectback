import Fastify from 'fastify';
import { routes } from './routes';
import cors from '@fastify/cors';


const server = Fastify({ logger :true })

const start = async () => {

    await server.register(routes)
    await server.register(cors)

    try {
        await server.listen({
            port: 8080
        })
    } catch(error) {
        console.log(error)
        process.exit(1)
    }
}

start()