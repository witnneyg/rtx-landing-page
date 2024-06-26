import { CreationCharacteristicsCards } from "./creactionCharacteristicsCards";
import img1 from "/geforce-game-ready-driver.jpeg";
import img2 from "/geforce-experience.jpeg";
import img3 from "/geforce-rtx-on-super-resolution-apex.jpeg";
import img4 from "/nvidia-g-sync.jpeg";
import img5 from "/geforce-virtual-reality.jpeg";
import img6 from "/nvidia-resizable-bar.jpeg";

export function CreationCharacteristics() {
  return (
    <div className="flex flex-col gap-5  py-14 bg-neutral-900  items-center">
      <h2 className="text-2xl font-bold pb-8 tracking-wide lg:text-3xl ">
        Características e Benefícios Adicionais
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-left gap-8 justify-center px-4 sm:px-0">
        <CreationCharacteristicsCards
          img={img1}
          title="Game Ready Drivers"
          description="Os drivers GeForce Game Ready oferecem a melhor experiência nos seus games favoritos. Os drivers são aprimorados em colaboração com desenvolvedores, e amplamente testados em milhares de configurações de hardware para garantir o melhor desempenho e confiabilidade. "
          more="Melhore o Desempenho dos Seus Jogos"
        />
        <CreationCharacteristicsCards
          img={img2}
          title="GeForce Experience"
          description="Capture e compartilhe vídeos, capturas de tela e transmissões ao vivo com seus amigos. Mantenha seus drivers atualizados e otimize as configurações dos seus games. Com o GeForce Experience você pode fazer tudo isso. Ele é o companheiro essencial da sua placa de vídeo GeForce. "
          more="Aprimore a Sua Experiência Gamer "
        />
        <CreationCharacteristicsCards
          img={img3}
          title="RTX Video Super Resolution"
          description="O RTX Vídeo Super Resolution aprimora seus vídeos reproduzidos automaticamente em seu navegador Chrome ou Edge usando algoritmos de IA de última geração para tornar as imagens mais nítidas e remover artefatos de compactação. Curta vídeos nítidos com resolução em até 4K. "
          more="Aprimore sua experiência de visualização"
        />
        <CreationCharacteristicsCards
          img={img4}
          title="NVIDIA G-SYNC"
          description="Garanta um gameplay fluido e sem travamentos com altas taxas de atualização, HDR e mais. Este é o monitor de games ideal e o equipamento preferido dos gamers entusiastas."
          more="Experimente um Gameplay Super Fluido"
        />
        <CreationCharacteristicsCards
          img={img5}
          title="Realidade Virtual"
          description="Os gráficos de mais alto desempenho oferecem as experiências mais fluidas e imersivas em VR. "
          more="Sinta uma Nova Imersão em VR "
        />
        <CreationCharacteristicsCards
          img={img6}
          title="Resizable BAR"
          description="O Resizable BAR usa um recurso avançado do PCI Express que permite que a CPU acesse todo o buffer de quadros da GPU de uma só vez, melhorando o desempenho em muitos games"
          more="Melhore o Desempenho dos Seus Jogos"
        />
      </div>
    </div>
  );
}
