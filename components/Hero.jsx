import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-between items-center max-w-7xl bg-yellow-500 mx-auto p-4 sm:p-8 space-y-4">
      <div className="space-y-4 ">
        <h3 className=" text-6xl max-w-xl">
          <span className="underline">Medium</span> is a place to write, read,
          and connect
        </h3>
        <p>
          It&apos;s easy and free to post your thinking on any topic and connect
          with millions of readers.
        </p>
      </div>
      <div>
        <h3 className="font-inter  hidden md:block md:text-9xl lg:text-[250px] font-bold">
          M
        </h3>
      </div>
    </div>
  );
};

export default Hero;
