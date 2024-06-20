import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "./button";
import img1 from "/public/geforce-rtx-4090-product-gallery-full-screen-3840-1.jpg";
import img2 from "/public/geforce-rtx-4090-product-gallery-full-screen-3840-2.jpg";
import img3 from "/public/geforce-rtx-4090-product-gallery-full-screen-3840-3.jpg";

import "swiper/css";
import "swiper/css/navigation";

import { useState } from "react";

export function SpecficationGallery() {
  const [currentImgSlide, setCurrentImgSlide] = useState<string>(img1);

  const images = [img1, img2, img3];

  return (
    <div className="flex flex-col items-center text-center bg-gray-800">
      <h2 className="font-bold text-2xl tracking-wide mt-10">Galeria</h2>
      <div className="w-[400px] mt-14">
        <img src={currentImgSlide} alt="" className="mb-4" />
        <Swiper
          navigation={true}
          spaceBetween={10}
          slidesPerView={3}
          onSlideChange={(swiper) => {
            setCurrentImgSlide(images[swiper.activeIndex]);
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} onClick={() => setCurrentImgSlide(img)}>
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col items-center gap-5 mt-10 ">
        <h2 className="text-2xl font-bold ">Comprar</h2>
        <span className="text-2xl font-bold mt-11 tracking-wide">
          GeForce RTX 4090
        </span>
        <Button size="medium">Veja Todas as Opções de Compra</Button>
        <span className="text-2xl font-bold ">
          Compre a Sua GeForce RTX 4090
        </span>

        <div className="flex flex-wrap gap-4 gap-y-6 items-center mt-28 px-4">
          <a href="">
            <img
              src="https://static.kabum.com.br/conteudo/icons/logo.svg"
              alt=""
              className="w-40"
            />
          </a>
          <a href="">
            <img
              src="https://assets.nvidia.partners/logos/wtb/pichau-logo.png"
              alt=""
              className="w-40"
            />
          </a>
          <a href="">
            <img
              src="https://assets.nvidia.partners/logos/wtb/terabyte-logo.png"
              alt=""
              className="w-40"
            />
          </a>
          <a href="">
            <img
              src="https://assets.nvidia.partners/logos/wtb/itxgamer-logo.png"
              alt=""
              className="w-40"
            />
          </a>
          <a href="">
            <img
              src="https://assets.nvidia.partners/logos/wtb/shopb-logo.png"
              alt=""
              className="w-40"
            />
          </a>
        </div>
        <div className="mt-28 my-10 px-4">
          <div className="border border-neutral-400 w-full"></div>
        </div>
        <div className="text-xs text-neutral-400 mb-10 px-10">
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
