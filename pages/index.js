import Layout from "../components/Layout";

import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
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

 const Index = ({ songs }) => {
   return (
  <Layout>
    <Button size='large'>Default</Button>
    <ul>
      {songs.map((song) => (
        <Link href={`/songs/${song.id}`}><li key={song.id}>{song.name}</li></Link>
      ))}
    </ul>
  </Layout>
   )
 };

export default Index;