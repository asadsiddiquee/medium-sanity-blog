import { sanityClient, urlFor } from "../../sanity";
import PortableText from "react-portable-text";
import Image from "next/image";
const Post = ({ post = props.post }) => {
  return (
    <main className="max-w-7xl mx-auto px-5">
      <div className="relative h-80">
        <Image
          layout="fill"
          className="w-full h-64 object-contain"
          src={urlFor(post.mainImage).url()}
          alt=""
        />
      </div>

      <article className="flex flex-col items-center justify-center">
        <h1 className="text-3xl mt-10 mb-3 mx-auto">{post.title}</h1>
        <h3 className="text-xl font-light text-gray-500 mb-2">
          {post.description}
        </h3>
        <div className="flex items-center space-x-2 mb-10">
          <div className="relative h-10 w-10">
            <Image
              layout="fill"
              className="h-10 w-10 object-cover"
              src={urlFor(post.author.image).url()}
              alt=""
            />
          </div>
          <p className="font-extralight text-sm">
            Blog post by{" "}
            <span className="text-green-600">{post.author.name} </span>-
            Published at {new Date(post._createdAt).toLocaleString()}
          </p>
        </div>
        <div className="flex justify-center items-center max-w-4xl mx-auto font-mono">
          <PortableText
            dataset="production"
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            content={post.body}
          />
        </div>
      </article>
    </main>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
        _id,
        slug{
        current
      } 
      }`;
  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current==$slug][0]{
        _id,
       _createdAt,
        title,
        author->{
        name,
        image
      },
      description,
      mainImage,
      slug,
      body
      }`;
  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
    revalidate: 86400,
  };
};
