import { useState } from "react";
import { CreationNvidiaOptionsCards } from "./creationNvidiaOptionsCards";

const creationNvidiaOptions = [
  {
    title: "Suas Ideias Aceleradas com AI.",
    subTitle: "Suas Ideias Aceleradas com AI.",
    description:
      "Leve seus projetos criativos a um novo nível com o NVIDIA Studio. Impulsionada por um novo hardware dedicado, a RTX Série 40 oferece um desempenho incomparável em renderizações 3D, edição de vídeo e design gráfico. Experimente recursos avançados acelerados por RTX nos principais softwares criativos, drivers NVIDIA Studio desenvolvidos para oferecer máxima estabilidade, e um conjunto de ferramentas exclusivas que utiliza todo o poder da RTX para fluxos de trabalho criativos otimizados por AI.",
    img: "/nvidia-studio.jpg",
    id: "1",
    more: "Acelere Sua Criatividade ",
  },
  {
    title: "A stream dos sonhos",
    subTitle: "NVIDIA Encoder",
    description:
      "Roube a cena com gráficos incríveis e um livestreaming de alta qualidade sem travamentos. Aprimoradas com a 8ª geração do NVIDIA Encoder (NVENC), as placas de vídeo GeForce RTX Série 40 inauguram uma nova era da transmissão de alta qualidade com suporte a codificação AV1 de última geração — projetada para oferecer maior eficiência do que o H.264, permitindo um livestreaming fluido com resoluções ainda mais altas. Além disso, otimizações exclusivas para todas as aplicações de streaming mais famosas do mercado te permitem sempre proporcionar seu melhor trabalho ao público.",
    img: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/nvidia-encoder.jpg",
    id: "2",
    more: "Sua stream com a melhor qualidade ",
  },
  {
    title: "Seu estúdio com tecnologia fornecida por AI.",
    subTitle: "NVIDIA Broadcast",
    description:
      "A aplicação NVIDIA Broadcast transforma qualquer ambiente em um estúdio — elevando o nível das suas lives, conversas por voz e vídeochamadas com poderosos efeitos com AI, como remoção de ruídos e eco no ambiente, remoção de fundo, fundos virtuais e muito mais.",
    img: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/geforce-broadcast-app.jpg",
    id: "3",
    more: "Transforme seu Áudio e Vídeo Ao Vivo ",
  },
  {
    title: "Conecte seus mundos criativos a um universo de possibilidades.",
    subTitle: "NVIDIA Omniverse",
    description:
      "NVIDIA Omniverse™ é uma plataforma colaborativa para design 3D que faz parte do conjunto de ferramentas do NVIDIA Studio para criadores. Ele foi desenvolvido para acelerar workflows e unir aplicações e assets para dar vida às suas ideias, mais rápido do que nunca.",
    img: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/nvidia-omniverse-creators.jpg",
    id: "4",
    more: "Veja o Futuro do Design 3D ",
  },
  {
    title: "A aplicação que coloca AI na pintura",
    subTitle: "NVIDIA Canvas",
    description:
      "Use AI para transformar simples pinceladas em imagens de paisagens realistas. Crie planos de fundo rapidamente ou acelere sua exploração de conceito para passar mais tempo visualizando ideias.",
    img: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/nvidia-canvas.jpg",
    id: "5",
    more: "Pinte com AI ",
  },
];

export function CreationSection() {
  const [optionsActived, setOptionsActived] = useState("1");

  function handleClickOption(option: string) {
    setOptionsActived(option);
  }

  return (
    <div className="flex flex-col items-center bg-gray-800 py-12 gap-6 bg-creative-background-t bg-no-repeat bg-cover">
      <h2 className="text-2xl font-bold">
        Obtenha Vantagem Competitiva com o Reflex
      </h2>
      <div className="flex justify-between gap-4 ">
        <span className="font-bold" onClick={() => handleClickOption("1")}>
          NVIDIA Studio
        </span>
        <span className="font-bold" onClick={() => handleClickOption("2")}>
          NVIDIA Encoder
        </span>
        <span className="font-bold" onClick={() => handleClickOption("3")}>
          NVIDIA Broadcast
        </span>
        <span className="font-bold" onClick={() => handleClickOption("4")}>
          NVIDIA Omniverse
        </span>
        <span className="font-bold" onClick={() => handleClickOption("5")}>
          NVIDIA Canvas
        </span>
      </div>
      {creationNvidiaOptions.map((item) =>
        optionsActived === item.id ? (
          <CreationNvidiaOptionsCards
            title={item.title}
            description={item.description}
            id={item.id}
            img={item.img}
            more={item.more}
            subTitle={item.subTitle}
            key={item.id}
          />
        ) : (
          ""
        )
      )}
    </div>
  );
}
