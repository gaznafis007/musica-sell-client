import React from "react";
import Lottie from "lottie-react";
import addMusic from "./add-music.json";

const HeaderBanner = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Lottie animationData={addMusic}></Lottie>
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold">
            Recycle your musical experience!
          </h1>
          <p className="py-6">
            Our world gives you chance to recycle your music experience and
            gives chance another to share yours....
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
