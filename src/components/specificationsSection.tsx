import { Button } from "./button";

export function SpecificationsSection() {
  return (
    <div
      id="especificacoes"
      className="flex flex-col items-center my-10 px-4 gap-10 lg:w-[550px] lg:mx-auto lg:mt-16"
    >
      <h2 className="text-2xl font-bold tracking-wide lg:text-3xl">
        Especificações
      </h2>
      <table className="min-w-full  ">
        <thead>
          <tr className="text-left  ">
            <th className="px-4 py-6  border-neutral-400"></th>
            <th className="px-4 py-6  border-neutral-400 font-semibold">
              RTX 4090
            </th>
            <th className="px-4 py-6  border-neutral-400 bg-neutral-900 font-semibold ">
              RTX 3090 font-semibold
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-3 border-y border-t-2 border-neutral-400 font-semibold">
              DLSS
            </td>
            <td className="px-4 py-3 border-y border-t-2 border-neutral-400 w-[150px]">
              DLSS 3
            </td>
            <td className="px-4 py-3 border-y border-t-2 border-neutral-400 bg-neutral-900">
              DLSS 2
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-y  border-neutral-400 font-semibold">
              Shader Cores
            </td>
            <td className="px-4 py-3 border-y border-neutral-400">
              Ada Lovelace <br /> 83 TFLOPS
            </td>
            <td className="px-4 py-3 border-y border-neutral-400 bg-neutral-900">
              Ampere <br /> 36 TFLOPS
            </td>
          </tr>

          <tr>
            <td className="px-4 py-3 border-y border-neutral-400 font-semibold">
              Ray Tracing Cores
            </td>
            <td className="px-4 py-3 border-y border-neutral-400">
              3ª geração, <br /> 191 TFLOPS
            </td>
            <td className="px-4 py-3 border-y border-neutral-400 bg-neutral-900">
              2ª geração <br /> 78 TFLOPS
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-y border-neutral-400 font-semibold">
              Tensor Cores (AI)
            </td>
            <td className="px-4 py-3 border-y border-neutral-400">
              4ª geração <br /> 1321 AI TOPS
            </td>
            <td className="px-4 py-3 border-y border-neutral-400 bg-neutral-900">
              3ª geração <br /> 320 AI TOPS
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-y border-neutral-400 font-semibold">
              NVENC
            </td>
            <td className="px-4 py-3 border-y border-neutral-400">
              2x 8ª geração <br /> AV1
            </td>
            <td className="px-4 py-3 border-y border-neutral-400 bg-neutral-900">
              1x 7th Gen
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-t border-neutral-400 font-semibold">
              VRAM
            </td>
            <td className="px-4 py-3 border-t border-neutral-400">
              24 GB <br /> GDDR6X
            </td>
            <td className="px-4 py-3 border-t border-neutral-400 bg-neutral-900">
              24 GB <br /> GDDR6X
            </td>
          </tr>
        </tbody>
      </table>
      <Button size="medium">Ver Especificações Completas</Button>
      <span className="text-center font-bold">
        Confira a Compatibilidade do Seu Sistema (RTX 4090 Founders Edition)
      </span>
    </div>
  );
}
