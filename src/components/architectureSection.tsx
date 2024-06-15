import { ArchitectureDescription } from "./architectureDescriptions";
import geforceRtxt from "/public/geforce-rtx-super-architecture-bm-xl550-p.jpg";
import geforceRtxp from "/public/geforce-rtx-super-architecture-bm-xl550-t.jpg";

const architectureDescriptions = [
  {
    title: "Placas de Vídeo de Ponta",
    description: "Arquitetura NVIDIA Ada Lovelace",
    img: "",
    id: "1",
  },
  {
    title: "Gráficos Realistas e Imersivos",
    description: "Ray Tracing Cores Dedicados",
    img: "",
    id: "2",
  },
  {
    title: "Desempenho Acelerado por AI",
    description: "NVIDIA DLSS 3",
    img: "",
    id: "3",
  },
  {
    title: "Tempo de Resposta Sensacional",
    description: "Plataforma de Baixa Latência NVIDIA Reflex",
    img: "",
    id: "4",
  },
  {
    title: "Feitas para Livestreaming",
    description: "NVIDIA Encoder",
    img: "",
    id: "5",
  },
  {
    title: "Voz e Vídeo Aprimorados por AI",
    description: "NVIDIA Broadcast",
    img: "",
    id: "6",
  },
  {
    title: "Acelere Sua Criatividade",
    description: "NVIDIA Studio",
    img: "",
    id: "7",
  },
  {
    title: "Desempenho e Confiabilidade",
    description: "Drivers Game Ready e Studio",
    img: "",
    id: "8",
  },
];

export function ArchitectureSection() {
  return (
    <div className="text-white  ">
      <img src={geforceRtxt} alt="" className="" />
      <h4 className="text-center font-bold ">
        Arquitetura NVIDIA Ada Lovelace
      </h4>
      <h2 className="text-center font-bold text-2xl mt-3">
        Desenhado para te dar superpoderes
      </h2>
      <div className="mt-8 px-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h5 className=" font-semibold text-lg">
              Novo Multiprocessador de Streaming
            </h5>
            <span>Aumento de desempenho e eficiência energética de até 2x</span>
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

      <div className="">
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
