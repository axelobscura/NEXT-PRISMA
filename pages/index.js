import Link from 'next/link';
import { PrismaClient } from '@prisma/client';

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const songs = await prisma.song.findMany({
    include: { artist: true }
  });

  return {
    props: {
      songs
    }
  };
}

export default ({ songs }) => (
  <ul>
    {songs.map((song) => (
      <Link href={`/songs/${song.id}`}><li key={song.id}>{song.name}</li></Link>
    ))}
  </ul>
);