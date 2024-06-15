import rayTracingImg from "/public/geforce-ray-tracing-portal-rtx-on-1536.webp";

export function RayTracingAction() {
  return (
    <div className="flex flex-col items-center text-center gap-4 mt-28">
      <span className="font-bold text-xl">Ray Tracing</span>
      <h2 className="font-bold text-2xl">Hiper-realista. Hiper-rápida</h2>
      <p>
        A arquitetura Ada libera toda a glória do ray tracing, simulando o
        comportamento da luz no mundo real. Com o poder da RTX Série 40 e dos RT
        Cores de Terceira Geração, você pode experimentar mundos virtuais
        incrivelmente detalhados como nunca antes.
      </p>
      <span className="font-bold">Veja o Ray Tracing em Ação</span>
      <div className="p-4 px-6">
        <img src={rayTracingImg} alt="" />
      </div>
    </div>
  );
}
