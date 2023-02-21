import React from "react";
import Swiper from "../components/swiper";

function Projects() {
  return (
    <main className="flex flex-col md:flex-row w-full h-auto justify-center">
      <Swiper />

      <div className="md:w-1/2 md:p-8 flex flex-col justify-center gap-8 text-center items-center ">
        <h1 className="hidden md:text-3xl text-yellow-400 font-semibold">
          Descrição
        </h1>
        <div className="hidden md:block w-full text-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
            architecto. Error similique saepe velit natus aliquid excepturi
            voluptatum, corrupti iure, sapiente ab ipsam iusto hic. Ullam
            quisquam laudantium dolores veniam!
          </p>
        </div>
        <div className="w-1/2 flex justify-center ">
          <button className="py-4 px-6 bg-yellow-400 shadow-lg rounded-lg shadow-yellow-100">
            Acesse
          </button>
        </div>
      </div>
    </main>
  );
}

export default Projects;
