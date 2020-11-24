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
    <ul style={{ listStyle: 'none'}}>
      {songs.map((song) => (
        <Link href={`/songs/${song.id}`}><li key={song.id}><Button size='large' type="primary" style={{ minWidth: '100vh', marginBottom: '10px' }}>{song.name}</Button></li></Link>
      ))}
    </ul>
  </Layout>
   )
 };

export default Index;