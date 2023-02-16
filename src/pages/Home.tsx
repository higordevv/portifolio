import React from "react";
import logo from "../assets/logo.png";
function Home() {
  return (
    <main className="h-3/5 bg-no-repeat bg-center mt-8 p-12 flex justify-center">
      <img
        src={logo}
        alt="logo_icon"
        className="absolute opacity-10 mx-auto -z-0"
      />
      <div className="m-auto z-20 flex flex-col text-center gap-6">
        <h1 className="text-8xl font-normal text-ice-100 ">Higor</h1>
        <h1 className="2xl font-semibold text-yellow-200">web developer</h1>
      </div>
    </main>
  );
}

export default Home;
