import cyberpunkLogo from "/cyberpunk-logo.png";

export function Dlss3Section() {
  return (
    <div
      id="dlss-3"
      className="flex flex-col text-center items-center gap-6 mt-10 lg:mt-0 px-4  pt-12 lg:pt-20 bg-nvidia-dlss-video-bg bg-no-repeat bg-center bg-cover m-auto max-w-screen-d"
    >
      <span className="font-bold lg:text-xl">NVIDIA DLSS 3</span>
      <h2 className="font-bold text-2xl lg:text-4xl">
        O Multiplicador de Desempenho, com Tecnologia Fornecida por AI.
      </h2>
      <span className=" text-gray-100 lg:w-[880px]">
        O DLSS é um avanço revolucionário nos gráficos com tecnologia fornecida
        por AI que aumenta imensamente o desempenho. Aprimorado com os novos
        Tensor Cores de quarta geração e o Optical Flow Accelerator nas placas
        de vídeo GeForce RTX Série 40, o DLSS 3 usa AI para criar frames
        adicionais de alta qualidade.
      </span>
      <span className="font-bold lg:text-lg">Veja Como o DLSS Funciona</span>
      <div className="mt-8 w-full flex justify-center">
        <iframe
          src="https://www.youtube.com/embed/QGI8EIgf8Y8"
          allowFullScreen
          className="w-[410px] h-[230px] lg:w-[700px] lg:h-[394px]"
        ></iframe>
      </div>

      <span className="text-xs w-[300px] lg:w-full text-gray-400">
        *Captured with GeForce RTX 4090 at 3840 x 2160, highest game settings
        and RT Overdrive mode.
      </span>

      <img
        src={cyberpunkLogo}
        alt="cyberpunk logo"
        className="w-56 mb-4 lg:ml-auto "
      />
    </div>
  );
}
