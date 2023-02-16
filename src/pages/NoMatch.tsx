import React from "react";

function NoMatch() {
  return (
    <div className="flex flex-col items-center m-auto">
      <h1 className="text-3xl md:text-5xl p-8 text-ice-100">
        Pagina não encontrada
      </h1>
      <h2 className="text-2xl md:text-4xl font-semibold p-8 text-yellow-300">
        404
      </h2>
    </div>
  );
}

export default NoMatch;
