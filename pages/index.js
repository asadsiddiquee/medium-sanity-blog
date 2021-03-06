import Head from "next/head";
import Hero from "../components/Hero";
import Header from "/components/Header";
import { sanityClient, urlFor } from "../sanity";
import Posts from "../components/Posts";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Medium blog</title>
        <meta
          name="description"
          content="This is Medium Clone made with nextJS, Tailwindcss, sanity"
        />
        <link rel="icon" href="/assets/favicon.png" />
      </Head>
      <main>
        <Hero />
        <Posts props={props} />
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
  _id,
  title,
  slug, 
  author ->{
  name,
  image
},
description,
mainImage,
slug
}`;
  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    },
  };
};
