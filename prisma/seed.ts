import { prisma } from './../src/lib/prisma';

async function seed() {

  await prisma.event.create({
    data: {
      id: '0faf602a-c391-45dc-9e6d-34717c18ed02',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento p/ devs apaixonados(as) por código!',
      maximumAttendees: 120
    }
  })
} 

seed().then(() => {
  console.log('Banco de dados povoado')
  prisma.$disconnect();
})