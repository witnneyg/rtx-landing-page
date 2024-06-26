import { ArchitectureDescription } from "./architectureDescriptions";
// import geforceRtxt from "/public/geforce-rtx-super-architecture-bm-xl550-p.jpg";
import img1 from "/cpu-icon.svg";
import img2 from "/raytracingicon.svg";
import img3 from "/nvidiaDlssIcon.svg";
import img4 from "/baixaLatenciaIcon.svg";
import img5 from "/enconderIcon.svg";
import img6 from "/broadcastIcon.svg";
import img7 from "/nvidiaStudioIcon.svg";
import img8 from "/driversGamingIcon.svg";

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
    <div
      id="arquitetura"
      className="m-auto flex flex-col text-white xl:bg-test-test max-w-screen-d "
    >
      <div className=" lg:bg-nvidia-arquitetura-background lg:bg-no-repeat lg:py-16 bg-cover lg:w-full bg-center lg:flex lg:flex-col">
        <img
          src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4080/geforce-rtx-super-architecture-bm-xl550-t.jpg"
          alt="arquitetura rtx"
          className="lg:hidden"
        />
        <div>
          <h4 className="text-center font-bold lg:text-xl">
            Arquitetura NVIDIA Ada Lovelace
          </h4>
          <h2 className="text-center font-bold text-2xl mt-3 lg:text-4xl">
            Desenhado para te dar superpoderes
          </h2>
        </div>
        <div className="lg:flex gap-2 mt-10 px-4">
          <div className="w-[41rem]"></div>
          <div className="flex flex-col gap-4 justify-between">
            <div className="flex flex-col gap-1">
              <span className=" font-semibold text-lg lg:text-xl">
                Novo Multiprocessador de Streaming
              </span>
              <span>
                Aumento de desempenho e eficiência energética de até 2x
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-lg  lg:text-xl">
                Tensor Cores de Quarta Geração
              </span>
              <span>
                Aumento em até 4x no desempenho com DLSS 3 vs. renderização de
                força bruta
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-lg  lg:text-xl">
                RT Cores de Terceira Geração
              </span>
              <span>Aumento de desempenho por Ray Tracing de até 2x</span>
            </div>
            <span className="font-bold">
              Saiba Mais Sobre a Super Poderosa Arquitetura Ada
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
