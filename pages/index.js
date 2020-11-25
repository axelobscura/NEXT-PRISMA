import Layout from "../components/Layout";
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
  <Layout songs={songs} titulo="Desarrollo de aplicación aos">
    <h1>TEST</h1>
  </Layout>
   )
 };

export default Index;