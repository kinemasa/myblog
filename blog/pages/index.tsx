import Image from "next/image";
import { Inter } from "next/font/google";
import { getAllPosts } from "../lib/notionAPI";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () =>{
  const allPosts = await getAllPosts();

  return {
    props:{
      allPosts,
      revalidate:60, 
      
    }
  }
}

export default function Home({ allPosts }) {
  console.log({allPosts})
  return (
<h1>ddd</h1>

  );
}
