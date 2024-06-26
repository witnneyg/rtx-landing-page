import { Button } from "./button";

export function Home() {
  return (
    <div
      id="home"
      className=" m-auto mt-20 text-white flex flex-col pt-16 sm:bg-nvidia4090-home-background-mobile sm:bg-center sm:bg-no-repeat sm:h-[690px] lg:bg-nvidia4090-home-background-xl lg:bg-center lg:h-[550px] lg:bg-cover xl:bg-test-test max-w-screen-d "
    >
      <div className="container mx-auto px-4 lg:px-0 lg:gap-6 flex flex-col gap-4">
        <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
          GeForce RTX 4090
        </h1>
        <h3 className="uppercase  text-xl font-bold lg:text-4xl">
          mais que rápida
        </h3>
        <p className="text-sm max-w-[500px] mb-8leading-6 lg:max-w-[440px] lg:text-base">
          A NVIDIA® GeForce RTX® 4090 é a GPU GeForce definitiva. Ele traz um
          enorme salto em desempenho, eficiência e gráficos com inteligência
          artificial. Experimente jogos de alto desempenho, mundos virtuais
          incrivelmente detalhados, produtividade sem precedentes e novas
          maneiras de criar. Equipada com a arquitetura NVIDIA Ada Lovelace, ela
          vem com 24 GB de memória G6X para oferecer a melhor experiência para
          jogadores e criadores.
        </p>
        <Button size="medium">Veja Todas as Opções de Compra</Button>
      </div>
      <img
        src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/geforce-rtx-4090-hero-350-p.jpg"
        alt="rtx 4090"
        className="sm:hidden"
      />
    </div>
  );
}
