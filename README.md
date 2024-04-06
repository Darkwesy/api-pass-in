# pass.in
O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrega no evento.

## Requisitos

### Requisitos funcionais

- [ ] O organizador deve poder cadastrar um novo evento;
- [ ] O organizador deve poder visualziar dados de um evento;
- [ ] O organizador deve poder visualizar a lista de participantes;
- [ ] O participante deve poder se inscrever em um evento;
- [ ] O participante deve poder visualizar seu crachá de inscrição;
- [ ] O participante deve poder realizar check-in no evento;

### Regras de negócio

- [ ] O participante só pode se inscrever em um evento uma única vez;
- [ ] O participante só pode se inscrever em um evento com vagas disponiveis;
- [ ] O participante só pode realizar check-in em um evento uma única vez;

### Requisitos não-funcionais
- [ ] O check-in no evento será realizado através de um QRCode;

## Aprendizado e stacks
O projeto utiliza TypeScript com o framework Fastify em conjunto com o ORM prisma e dependencias como zod, para validação de dados, e documentação construida com swagger.
O evento trouxe diversos conceitos sobre back-end como paginação, validação de dados em conjunto com schemas para rotas, alem de criação de error handlers. Contribuindo muito para o meu aprendizado e evolução como desenvolvedor back-end no ecosistema JavaScript/TypeScript.