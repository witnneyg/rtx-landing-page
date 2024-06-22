import nvidiaReflexBg from "/public/nvidiaReflexBg.jpg";

export function ReflexSection() {
  return (
    <div className="flex flex-col lg:bg-nvidia-reflex-bg lg:h-[700px] lg:bg-cover lg:bg-bottom">
      <img src={nvidiaReflexBg} alt="Nvidia Pc imagem" className="lg:hidden" />
      <div className="flex flex-col items-center gap-4 lg:gap-5 mt-16  ">
        <span className="font-bold lg:text-lg">NVIDIA Reflex</span>
        <h2 className="text-2xl font-bold lg:text-4xl">
          Vitória medida em milissegundos
        </h2>
        <p className="w-[260px] text-center lg:w-[960px]">
          NVIDIA Reflex e as Placas de Vídeo GeForce RTX Série 40 entregam a
          latência mais baixa e o menor tempo de resposta para a vantagem
          competitiva definitiva. Desenvolvido para otimizar e mensurar a
          latência do sistema, o Reflex te permite identificar alvos
          rapidamente, reagir mais rápido e aumentar a precisão da mira em jogos
          competitivos.
        </p>
        <span className="font-bold my-14 lg:mt-8 lg:text-lg">
          Obtenha Vantagem Competitiva com o Reflex
        </span>
      </div>
    </div>
  );
}
