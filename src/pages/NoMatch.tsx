import React from "react";
import Manoel from "../assets/manoel_404.webp";
function NoMatch() {
  return (
    <div className="flex flex-col items-center m-auto text-center max-h-screen max-w-screen">
      <h1 className="text-3xl md:text-5xl p-4 md:p-8 text-ice-100">
        Pagina não encontrada
      </h1>
      <h2 className="text-2xl md:text-4xl font-semibold p-4 md:p-8 text-yellow-300">
        404
      </h2>
      <img src={Manoel} alt="test" className="rounded-full" />
    </div>
  );
}

export default NoMatch;
