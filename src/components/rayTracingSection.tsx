import rtxBgDesktop from "/public/rtxBg.jpg";
import rtxBgMobile from "/public/rtxBg.jpg";

export function RayTracingSection() {
  return (
    <div className="flex flex-col mt-20 px-4 gap-4">
      <img src={rtxBgMobile} alt="Rtx Imagem plano de fundo" />
      <h2 className="font-bold text-2xl">RTX, It's On.</h2>
      <span className="font-bold text-xl ">Ray Tracing e IA Definitivos</span>
      <p>
        NVIDIA RTX é a mais avançada plataforma para Ray Tracing e tecnologias
        IA que estão revolucionando a maneira que nós jogamos e criamos. Mais de
        500 dos principais jogos e aplicações utilizam RTX para entregar
        gráficos mais realistas com um desempenho incrívelmente rápido e novos
        recursos com IA de ponta, como DLSS. RTX On.
      </p>
      <span className="font-bold">Confira os Mais Novos Games com RTX</span>
    </div>
  );
}
