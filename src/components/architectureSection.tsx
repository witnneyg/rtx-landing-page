import { ArchitectureDescription } from "./architectureDescriptions";
import geforceRtxt from "/public/geforce-rtx-super-architecture-bm-xl550-p.jpg";
// import geforceRtxp from "/public/geforce-rtx-super-architecture-bm-xl550-t.jpg";
import img1 from "/public/cpu-icon.svg";
import img2 from "/public/raytracingicon.svg";
import img3 from "/public/nvidiaDlssIcon.svg";
import img4 from "/public/baixaLatenciaIcon.svg";
import img5 from "/public/enconderIcon.svg";
import img6 from "/public/broadcastIcon.svg";
import img7 from "/public/nvidiaStudioIcon.svg";
import img8 from "/public/driversGamingIcon.svg";

const architectureDescriptions = [
  {
    title: "Placas de Vídeo de Ponta",
    description: "Arquitetura NVIDIA Ada Lovelace",
    img: img1,
    id: "1",
  },
  {
    title: "Gráficos Realistas e Imersivos",
    description: "Ray Tracing Cores Dedicados",
    img: img2,
    id: "2",
  },
  {
    title: "Desempenho Acelerado por AI",
    description: "NVIDIA DLSS 3",
    img: img3,
    id: "3",
  },
  {
    title: "Tempo de Resposta Sensacional",
    description: "Plataforma de Baixa Latência NVIDIA Reflex",
    img: img4,
    id: "4",
  },
  {
    title: "Feitas para Livestreaming",
    description: "NVIDIA Encoder",
    img: img5,
    id: "5",
  },
  {
    title: "Voz e Vídeo Aprimorados por AI",
    description: "NVIDIA Broadcast",
    img: img6,
    id: "6",
  },
  {
    title: "Acelere Sua Criatividade",
    description: "NVIDIA Studio",
    img: img7,
    id: "7",
  },
  {
    title: "Desempenho e Confiabilidade",
    description: "Drivers Game Ready e Studio",
    img: img8,
    id: "8",
  },
];

export function ArchitectureSection() {
  return (
    <div className="flex flex-col text-white ">
      <div className=" lg:bg-nvidia-arquitetura-background lg:bg-no-repeat lg:py-16 bg-cover lg:w-full bg-center lg:flex lg:flex-col">
        <img src={geforceRtxt} alt="arquitetura rtx" className="lg:hidden" />
        <div>
          <h4 className="text-center font-bold ">
            Arquitetura NVIDIA Ada Lovelace
          </h4>
          <h2 className="text-center font-bold text-2xl mt-3">
            Desenhado para te dar superpoderes
          </h2>
        </div>
        <div className="lg:flex gap-2 mt-10 px-4">
          <div className="w-[41rem]"></div>
          <div className="flex flex-col gap-4 justify-between">
            <div className="flex flex-col gap-1">
              <h5 className=" font-semibold text-lg">
                Novo Multiprocessador de Streaming
              </h5>
              <span>
                Aumento de desempenho e eficiência energética de até 2x
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="font-semibold text-lg">
                Tensor Cores de Quarta Geração
              </h5>
              <span>
                Aumento em até 4x no desempenho com DLSS 3 vs. renderização de
                força bruta
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="font-semibold text-lg">
                RT Cores de Terceira Geração
              </h5>
              <span>Aumento de desempenho por Ray Tracing de até 2x</span>
            </div>
            <span className="font-semibold">
              Saiba Mais Sobre a Super Poderosa Arquitetura Ada{" "}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center lg:flex-row lg:flex-wrap lg:gap-10  ">
        {architectureDescriptions.map((items) => (
          <ArchitectureDescription
            title={items.title}
            description={items.description}
            img={items.img}
            id={items.id}
          />
        ))}
      </div>
    </div>
  );
}
