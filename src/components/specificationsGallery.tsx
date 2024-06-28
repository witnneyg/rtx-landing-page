import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "./button";
import img1 from "/geforce-rtx-4090-product-gallery-full-screen-3840-1.jpg";
import img2 from "/geforce-rtx-4090-product-gallery-full-screen-3840-2.jpg";
import img3 from "/geforce-rtx-4090-product-gallery-full-screen-3840-3.jpg";

import "swiper/css";
import "swiper/css/navigation";

import { useState } from "react";

export function SpecficationGallery() {
  const [currentImgSlide, setCurrentImgSlide] = useState<string>(img1);

  const images = [img1, img2, img3];

  return (
    <div className="flex flex-col items-center text-center bg-neutral-900">
      <h2 className="font-bold text-2xl tracking-wide mt-10">Galeria</h2>
      <div className=" mt-14  w-full flex flex-col items-center">
        <div className="relative  lg:w-[820px]">
          <img
            src={currentImgSlide}
            alt="placa de video rtx 4090"
            className="mb-4"
          />
          <span className="absolute bottom-4 left-0 bg-black bg-opacity-40  w-full text-left py-3 px-5">
            GeForce RTX 4090
          </span>
        </div>
        <div className="w-[480px] sm:w-[600px] md:w-[700px] lg:w-[800px] object-cover m-auto overflow-hidden">
          <Swiper navigation={true} spaceBetween={10} slidesPerView={2.6}>
            {images.map((img, index) => (
              <SwiperSlide key={index} onClick={() => setCurrentImgSlide(img)}>
                <img
                  src={img}
                  alt={`Placa de video rtx 4090`}
                  className={`cursor-pointer object-cover lg:w-72 lg:h-[160px] ${
                    currentImgSlide === img ? "border border-green-500" : ""
                  }`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 mt-10 bg-black w-full lg:mt-20">
        <h2 className="text-2xl font-bold  lg:text-4xl lg:pt-20 ">Comprar</h2>
        <span className="text-2xl font-bold mt-11 tracking-wide lg:mb-6 lg:text-4xl">
          GeForce RTX 4090
        </span>
        <Button size="medium">Veja Todas as Opções de Compra</Button>
        <span className="text-2xl font-bold lg:text-4xl lg:mt-20">
          Compre a Sua GeForce RTX 4090
        </span>

        <div className="flex flex-wrap m-auto gap-4 gap-y-6 items-center mt-28 px-4 sm:gap-x-48  lg:px-36 lg:gap-x-72 lg:gap-y-16">
          <img
            src="https://static.kabum.com.br/conteudo/icons/logo.svg"
            alt="Kabum logo"
            className="w-40"
          />
          <img
            src="https://assets.nvidia.partners/logos/wtb/pichau-logo.png"
            alt="pichau logo"
            className="w-40"
          />
          <img
            src="https://assets.nvidia.partners/logos/wtb/terabyte-logo.png"
            alt="terabyte logo"
            className="w-40"
          />
          <img
            src="https://assets.nvidia.partners/logos/wtb/itxgamer-logo.png"
            alt="itxgamer logo"
            className="w-40"
          />
          <img
            src="https://assets.nvidia.partners/logos/wtb/shopb-logo.png"
            alt="shopb logo"
            className="w-40"
          />
        </div>
        <div className="mt-28 my-10 px-8 w-full">
          <div className="border border-neutral-500"></div>
        </div>
        <div className="text-xs text-neutral-400 mb-10 px-10 lg:w-[1000px]">
          © 2022 NVIDIA Corporation. NVIDIA, the NVIDIA logo, GeForce, GeForce
          Experience, GeForce RTX, and G-SYNC are registered trademarks and/or
          trademarks of NVIDIA Corporation in the United States and other
          countries. All other trademarks and copyrights are the property of
          their respective owners.
        </div>
      </div>
    </div>
  );
}
