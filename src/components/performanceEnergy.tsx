export function PerformanceEnergy() {
  return (
    <div className="flex flex-col items-center text-center gap-3 mt-10">
      <h2 className="font-bold text-2xl">Fração do Consumo de Energia</h2>
      <span className="font-bold text-lg">Menor é Melhor</span>
      <div className="flex gap-4 w-full items-end mt-9">
        <p className="text-xs font-semibold">RTX 4090</p>
        <p className="text-xs font-semibold">RTX 3090 TI</p>
      </div>
      <div className="flex gap-2 w-full items-center px-3 mt-2">
        <span className="text-sm  min-w-[80px] mb-6 font-bold">Jogo Médio</span>
        <img
          // src="https://cdn.discordapp.com/attachments/818650457198559272/1251607403158311083/image.png?ex=666f31ba&is=666de03a&hm=e907a62d31eaf154d569012bf19b7e983d20b4d2b6785deed4b43afaa7039273&"
          src="https://cdn.discordapp.com/attachments/818650457198559272/1251608593028092035/image.png?ex=666f32d6&is=666de156&hm=8f9e6fc0fd3dcb64cb53d13cbd61caac53b6a06e41c0145104d327c433a5c0f6&"
          alt=""
          className="w-full"
        />
      </div>

      <span className="font-bold">Energia Relativa</span>
      <p className="text-xs text-center w-[400px] mt-10">
        A energia relativa do jogo é medida em 22 jogos em 4K, 1440p e 1080p.
        Representante da NVIDIA Founders Edition ou de uma placa de vídeo de
        referência.
      </p>
    </div>
  );
}
