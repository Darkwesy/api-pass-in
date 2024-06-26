import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { prisma } from '../lib/prisma';
import { generateSlug } from '../utils/generateSlug';
import { FastifyInstance } from 'fastify';
import { BadRequest } from './_errors/bad-request';

export async function createEvent(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .post('/events', {
      schema: {
        summary: 'Criar um evento',
        tags: ['Eventos'],
        body: z.object({
          title: z.string().min(4),
          details: z.string().nullable(),
          maximumAttendees: z.number().int().positive().nullable()
        }),
        response: {
          201: z.object({
            eventId: z.string().uuid()
          })
        }
      }
    }, async (request, reply) => {

      // Valida o objeto trazido pelo body e adiciona ele a variavel data;
      const { title, details, maximumAttendees } = request.body;

      const slug = generateSlug(title);

      const eventWithSameSlug = await prisma.event.findUnique({
        where: {
          slug,
        }
      })

      if (eventWithSameSlug !== null) {
        throw new BadRequest('Existe outro evento com o mesmo título')
      }

      // Cria o novo registro no banco de dados;
      const event = await prisma.event.create({
        data: {
          title,
          details,
          maximumAttendees,
          slug,
        }
      });

      // Retorna o status code relativo a requisição e o id do registro;
      return reply.status(201).send({ eventId: event.id })
    })
}