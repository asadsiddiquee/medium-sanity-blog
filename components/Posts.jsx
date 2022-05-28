import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../sanity";

const Posts = ({ props }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6  py-4 max-w-7xl mx-auto">
      {props.posts.map((post) => (
        <Link key={post._id} href={`/post/${post.slug.current}`}>
          <div className="border border-black hover:cursor-pointer p-3 shadow-lg shadow-black/20 rounded-lg group">
            <div className="justify-center flex h-80 relative">
              <Image
                layout="fill"
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                className="object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
              />
            </div>

            <div className="flex p-4 justify-between bg-white">
              <div className="mr-4">
                <p className="inline-block font-bold border-b-2 border-black ">
                  {post.title}
                </p>
                <p className="">
                  {post.description} by{" "}
                  <span className="italic text-green-600">
                    {post.author.name}
                  </span>
                </p>
              </div>
              <div className=" my-auto  w-12 h-12 relative">
                <Image
                  className="rounded-full object-cover"
                  layout="fill"
                  src={urlFor(post.author.image).url()}
                  alt=""
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
