import Link from 'next/link';
import { PrismaClient } from '@prisma/client';

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const categorias = await prisma.categoria.findMany();

  return {
    props: {
        categorias
    }
  };
}

export default ({ categorias }) => (
  <ul>
    {categorias.map((categoria) => (
      <Link href={`/cv/${categoria.id}`} key={categoria.id}><li>{categoria.name}</li></Link>
    ))}
  </ul>
);