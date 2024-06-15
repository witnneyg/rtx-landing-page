import { Button } from "./button";

export function HeaderScrolled() {
  return (
    <div className="bg-gray-900 ">
      <div className="container mx-auto flex items-center gap-4 justify-between  px-4 py-1 font-semibold  text-base text-white">
        <a href="">Arquitetura</a>
        <div className="flex justify-between">
          {/* <a href="">Desempenho</a> */}
          {/* <a href="">Ray Tracing</a>
        <a href="">DLSS 3</a>
        <a href="">Reflex</a>
        <a href="">Criação</a>
        <a href="">Especificações</a>
        ... */}
        </div>
        <Button>Comprar</Button>
      </div>
    </div>
  );
}
