import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.note.create({
    data: {
      title: 'My first note',
      content: 'Hello, world!'
    }
  });

  await prisma.note.create({
    data: {
      title: 'My second note',
      content: 'Hello, world2!'
    }
  });

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
