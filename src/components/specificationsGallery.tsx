// import { Button } from "./button";

export function SpecficationGallery() {
  return (
    <div className="flex flex-col items-center text-center">
      <div>
        <h2 className="font-bold text-2xl tracking-wide">Galeria</h2>
        <div></div>
      </div>
      <div className="flex flex-col gap-5 mt-10">
        <h2 className="text-2xl font-bold ">Comprar</h2>
        <span className="text-2xl font-bold mt-11 tracking-wide">
          GeForce RTX 4090
        </span>
        {/* <Button>Veja Todas as Opções de Compra</Button> */}
        <span className="text-2xl font-bold ">
          Compre a Sua GeForce RTX 4090
        </span>

        <div className="flex flex-wrap gap-4 gap-y-6 items-center mt-28 px-4">
          <a href="">
            <img
              src="https://static.kabum.com.br/conteudo/icons/logo.svg"
              alt=""
              className="w-40"
            />
          </a>
          <a href="">
            <img
              src="https://assets.nvidia.partners/logos/wtb/pichau-logo.png"
              alt=""
              className="w-40"
            />
          </a>
          <a href="">
            <img
              src="https://assets.nvidia.partners/logos/wtb/terabyte-logo.png"
              alt=""
              className="w-40"
            />
          </a>
          <a href="">
            <img
              src="https://assets.nvidia.partners/logos/wtb/itxgamer-logo.png"
              alt=""
              className="w-40"
            />
          </a>
          <a href="">
            <img
              src="https://assets.nvidia.partners/logos/wtb/shopb-logo.png"
              alt=""
              className="w-40"
            />
          </a>
        </div>
        <div>kabum,pichau,teraitx,shop</div>
      </div>
    </div>
  );
}
