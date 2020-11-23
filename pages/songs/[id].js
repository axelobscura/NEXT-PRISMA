import { PrismaClient } from '@prisma/client';

export async function getStaticProps({ params }) {
  const prisma = new PrismaClient();
  const song = await prisma.song.findOne({
    include: { artist: true },
    where: {
      id: Number(params.id)
    }
  });

  return {
    props: {
      song
    }
  };
}

export async function getStaticPaths() {
  const prisma = new PrismaClient();
  const songs = await prisma.song.findMany();

  return {
    paths: songs.map((song) => ({
      params: {
        id: song.id.toString()
      }
    })),
    fallback: false
  };
}

export default ({ song }) => (
  <p>{song.name}</p>
);