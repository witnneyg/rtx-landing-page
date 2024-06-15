export function PerformanceSection() {
  return (
    <div className="flex flex-col  items-center text-white mt-28 bg-gray-900 py-12">
      <h2 className="text-2xl font-bold mb-12">Desempenho</h2>
      <div className="flex gap-4 w-full items-end mb-6">
        <p className="text-xs font-semibold">RTX 4090</p>
        <p className="text-xs font-semibold">RTX 3090 TI</p>
      </div>
      <div className="overflow-x-auto w-full pb-4">
        <img
          src="/public/graphic.svg"
          alt="Gráfico de desempenho RTX 4090 e RTX 3090 TI"
          className="w-[700px] max-w-none"
        />
      </div>
      <h6 className="font-semibold mt-4">Relative Performance</h6>
      <p className="text-xs text-center w-[400px] mt-10">
        Resolução de 3840x2160, configurações de jogo mais altas, modo de
        desempenho de super resolução DLSS, geração de quadros DLSS na série RTX
        40, i9-12900K, 32 GB de RAM, Win 11 x64. Todos os dados DLSS Frame
        Generation e Cyberpunk 2077 com o novo Ray Tracing: Overdrive Mode
        baseado em compilações de pré-lançamento.
      </p>
    </div>
  );
}
