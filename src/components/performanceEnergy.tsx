export function PerformanceEnergy() {
  return (
    <div className="flex flex-col items-center text-center gap-3 mt-10">
      <h2 className="font-bold text-2xl lg:text-4xl">
        Fração do Consumo de Energia
      </h2>
      <span className="font-bold text-lg lg:text-xl">Menor é Melhor</span>
      <div className="flex flex-col  lg:w-auto">
        <div className="flex gap-4  items-end my-6 mr-12">
          <div className="flex gap-1 items-center ml-auto">
            <div className="w-2 h-2 bg-green-500"></div>
            <p className="text-xs font-semibold">RTX 4090</p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="w-2 h-2 bg-gray-500"></div>
            <p className="text-xs font-semibold">RTX 3090 TI</p>
          </div>
        </div>
        <div className="flex gap-2 items-center justify-center px-3">
          <span className="text-sm  min-w-[80px] mb-6 font-bold">
            Jogo Médio
          </span>
          <img
            src="/grafico-web.png"
            alt="Grafrico de energia"
            className="hidden lg:block lg:w-[52rem]"
          />
          <img
            src="/grafico-mobile.png"
            alt="Grafrico de energia"
            className="w-[30rem] lg:hidden   md:w-[36rem]"
          />
        </div>
      </div>

      <span className="font-bold">Energia Relativa</span>
      <p className="text-xs text-center text-neutral-400 w-[400px] mt-10 lg:w-[600px]">
        A energia relativa do jogo é medida em 22 jogos em 4K, 1440p e 1080p.
        Representante da NVIDIA Founders Edition ou de uma placa de vídeo de
        referência.
      </p>
    </div>
  );
}
