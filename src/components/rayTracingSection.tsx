import rtxBgMobile from "/rtxBg.jpg";

export function RayTracingSection() {
  return (
    <div
      id="ray-tracing"
      className="flex flex-col container m-auto mt-20 justify-center  px-4 lg:px-8 gap-5 lg:bg-nvidia-raytracing-desktop-bg lg:pt-24 h-[440px]  bg-right bg-no-repeat bg-contain"
    >
      <img src={rtxBgMobile} alt="Ray tracing" className="lg:hidden" />
      <h2 className="font-bold text-2xl lg:text-4xl">RTX, It's On.</h2>
      <span className="font-bold text-xl lg:text-2xl">
        Ray Tracing e IA Definitivos
      </span>
      <p className="lg:w-[520px]">
        NVIDIA RTX é a mais avançada plataforma para Ray Tracing e tecnologias
        IA que estão revolucionando a maneira que nós jogamos e criamos. Mais de
        500 dos principais jogos e aplicações utilizam RTX para entregar
        gráficos mais realistas com um desempenho incrívelmente rápido e novos
        recursos com IA de ponta, como DLSS. RTX On.
      </p>
      <span className="font-bold lg:text-lg">
        Confira os Mais Novos Games com RTX
      </span>
    </div>
  );
}
