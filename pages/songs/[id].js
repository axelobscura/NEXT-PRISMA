import Layout from "../../components/Layout";
import { PrismaClient } from '@prisma/client';

export async function getStaticProps({ params }) {
  const prisma = new PrismaClient();
  const song = await prisma.song.findOne({
    include: { artist: true },
    where: {
      id: Number(params.id)
    }
  });
  const songs = await prisma.song.findMany({
    include: { artist: true }
  });

  return {
    props: {
      song,
      songs
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

export default ({ songs, song }) => (
  <Layout songs={songs} titulo={song.name}>
    <p>{song.name}</p>
  </Layout>
);