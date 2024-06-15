import { Button } from "./button";

export function Home() {
  return (
    <div className="bg-nvidia4090-home-background-mobile bg-no-repeat bg-cover bg-center w-full  h-screen text-white flex flex-col gap-5 pt-16 ">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold tracking-tight">GeForce RTX 4090</h1>
        <h3 className="uppercase  text-xl font-bold">mais que rápida</h3>
        <p className="text-base max-w-[500px] mb-8">
          A NVIDIA® GeForce RTX® 4090 é a GPU GeForce definitiva. Ele traz um
          enorme salto em desempenho, eficiência e gráficos com inteligência
          artificial. Experimente jogos de alto desempenho, mundos virtuais
          incrivelmente detalhados, produtividade sem precedentes e novas
          maneiras de criar. Equipada com a arquitetura NVIDIA Ada Lovelace, ela
          vem com 24 GB de memória G6X para oferecer a melhor experiência para
          jogadores e criadores.
        </p>
        <Button>Veja Todas as Opções de Compra</Button>
      </div>
    </div>
  );
}
