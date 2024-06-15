import cyberpunkLogo from "/public/cyberpunk-logo.png";

export function Dlss3Section() {
  return (
    <div className="flex flex-col text-center items-center gap-5 mt-10 px-4 bg-nvidia-dlss-video-bg bg-no-repeat bg-center bg-cover">
      <span className="font-bold">NVIDIA DLSS 3</span>
      <h2 className="font-bold text-2xl">
        O Multiplicador de Desempenho, com Tecnologia Fornecida por AI.
      </h2>
      <span className="text-gray-100">
        O DLSS é um avanço revolucionário nos gráficos com tecnologia fornecida
        por AI que aumenta imensamente o desempenho. Aprimorado com os novos
        Tensor Cores de quarta geração e o Optical Flow Accelerator nas placas
        de vídeo GeForce RTX Série 40, o DLSS 3 usa AI para criar frames
        adicionais de alta qualidade.
      </span>
      <span className="font-bold ">Veja Como o DLSS Funciona</span>
      <div className="">
        <img
          src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/geforce-dlss-module-thumbnail-ari.jpg"
          alt="Play Video"
          className="w-[410px]"
        ></img>
      </div>
      <span className="text-xs w-[300px] text-gray-400">
        *Captured with GeForce RTX 4090 at 3840 x 2160, highest game settings
        and RT Overdrive mode.
      </span>
      <img src={cyberpunkLogo} alt="cyberpunk logo" className="w-56 mb-4" />
    </div>
  );
}
