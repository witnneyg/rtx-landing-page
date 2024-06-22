import rayTracingImg from "/public/geforce-ray-tracing-portal-rtx-on-1536.webp";

export function RayTracingAction() {
  return (
    <div className="flex flex-col items-center text-center gap-5 mt-28">
      <span className="font-bold text-xl lg:text-xl">Ray Tracing</span>
      <h2 className="font-bold text-2xl lg:text-4xl tracking-wide">
        Hiper-realista. Hiper-rápida
      </h2>
      <p className="lg:w-[700px]">
        A arquitetura Ada libera toda a glória do ray tracing, simulando o
        comportamento da luz no mundo real. Com o poder da RTX Série 40 e dos RT
        Cores de Terceira Geração, você pode experimentar mundos virtuais
        incrivelmente detalhados como nunca antes.
      </p>
      <span className="font-bold lg:text-lg">Veja o Ray Tracing em Ação</span>
      <div className="p-4 px-6 lg:p-0 lg:mt-3">
        <img src={rayTracingImg} alt="" />
      </div>
    </div>
  );
}
