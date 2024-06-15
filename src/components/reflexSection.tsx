import nvidiaReflexBg from "/public/nvidiaReflexBg.jpg";

export function ReflexSection() {
  return (
    <div className="flex flex-col">
      <img src={nvidiaReflexBg} alt="Nvidia Pc imagem" />
      <div className="flex flex-col items-center gap-4 mt-20">
        <span className="font-bold">NVIDIA Reflex</span>
        <h2 className="text-2xl font-bold">Vitória medida em milissegundos</h2>
        <p className="w-[260px] text-center">
          NVIDIA Reflex e as Placas de Vídeo GeForce RTX Série 40 entregam a
          latência mais baixa e o menor tempo de resposta para a vantagem
          competitiva definitiva. Desenvolvido para otimizar e mensurar a
          latência do sistema, o Reflex te permite identificar alvos
          rapidamente, reagir mais rápido e aumentar a precisão da mira em jogos
          competitivos.
        </p>
        <span className="font-bold my-14">
          Obtenha Vantagem Competitiva com o Reflex
        </span>
      </div>
    </div>
  );
}
