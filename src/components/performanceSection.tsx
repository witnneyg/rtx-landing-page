export function PerformanceSection() {
  return (
    <div className="flex flex-col  items-center text-white mt-28 bg-neutral-900 py-12 ">
      <h2 className="text-2xl font-bold my-5 lg:my-10 lg:text-4xl">
        Desempenho
      </h2>
      <div className="flex flex-col w-full md:w-auto">
        <div className="flex gap-4 w-full mb-6">
          <div className="flex gap-1 items-center ml-auto">
            <div className="w-2 h-2 bg-green-500"></div>
            <p className="text-xs font-semibold">RTX 4090</p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="w-2 h-2 bg-gray-500"></div>
            <p className="text-xs font-semibold">RTX 3090 TI</p>
          </div>
        </div>
        <div className=" flex  justify-center  overflow-x-auto w-full pb-4 ">
          <img
            src="/public/graphic.svg"
            alt="Gráfico de desempenho RTX 4090 e RTX 3090 TI"
            className="w-[700px] max-w-none lg:hidden"
          />
          <img
            src="https://www.nvidia.com/pt-br/geforce/graphics-cards/40-series/rtx-4090/_jcr_content/root/responsivegrid/nv_container/nv_container/nv_image_copy.coreimg.svg/1704176864641/geforce-rtx-4090-perf-chart.svg"
            alt="Gráfico de desempenho RTX 4090 e RTX 3090 TI"
            className="hidden lg:block lg:w-[900px] xl:w-[1100px]"
          />
        </div>
      </div>

      <h6 className="font-semibold mt-4 lg:text-lg">Relative Performance</h6>
      <p className="text-xs text-center w-[400px] mt-10 lg:mb-8 text-neutral-500 lg:w-[660px] ">
        Resolução de 3840x2160, configurações de jogo mais altas, modo de
        desempenho de super resolução DLSS, geração de quadros DLSS na série RTX
        40, i9-12900K, 32 GB de RAM, Win 11 x64. Todos os dados DLSS Frame
        Generation e Cyberpunk 2077 com o novo Ray Tracing: Overdrive Mode
        baseado em compilações de pré-lançamento.
      </p>
    </div>
  );
}
