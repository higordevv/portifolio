import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  EffectCoverflow,
} from "swiper";

SwiperCore.use([EffectCoverflow]);
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import React, { useState } from "react";

export default () => {
  const [projetos, setProjetos] = useState([
    "Projeto 1",
    "Projeto 2",
    "Projeto 3",
    "Projeto 1",
    "Projeto 2",
    "Projeto 3",
    "Projeto 1",
    "Projeto 2",
    "Projeto 3",
  ]);

  const adicionarProjeto = () => {
    const novoProjeto = `Projeto ${projetos.length + 1}`;
    setProjetos([...projetos, novoProjeto]);
  };

  return (
    <>
      <div className="w-screen h-auto md:w-3/6 md:h-1/2 md:m-8">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 65,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
        >
          {projetos.map((projeto) => (
            <SwiperSlide key={projeto.toString()}>
              {" "}
              <div className="bg-slate-900 h-80 m-8 md:p-8 flex rounded-md justify-center items-center">
                {projeto}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
