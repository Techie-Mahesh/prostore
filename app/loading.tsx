import Image from "next/image";
import React from "react";
import loader from "@/assets/loader.gif";

const Loading = () => {
  return (
    <div className="display-flex justify-content-center align-items-center h-screen w-screen">
      <Image
        src={loader}
        alt="loader"
        width={100}
        height={100}
        className="mx-auto mt-20"
      />
    </div>
  );
};

export default Loading;
