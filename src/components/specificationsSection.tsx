import { Button } from "./button";

export function SpecificationsSection() {
  return (
    <div className="flex flex-col items-center my-10 px-4 gap-10">
      <h2 className="text-2xl font-bold tracking-wide">Especificações</h2>
      <table className="min-w-full">
        <thead>
          <tr className="text-left ">
            <th className="px-4 py-6  border-gray-300"></th>
            <th className="px-4 py-6  border-gray-300 font-semibold">
              RTX 4090
            </th>
            <th className="px-4 py-6  border-gray-300 bg-gray-700 font-semibold">
              RTX 3090 font-semibold
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-3 border-y border-gray-300 font-semibold">
              DLSS
            </td>
            <td className="px-4 py-3 border-y border-gray-300">DLSS 3</td>
            <td className="px-4 py-3 border-y border-gray-300 bg-gray-700">
              DLSS 2
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-y border-gray-300 font-semibold">
              Shader Cores
            </td>
            <td className="px-4 py-3 border-y border-gray-300">
              Ada Lovelace 83 TFLOPS
            </td>
            <td className="px-4 py-3 border-y border-gray-300 bg-gray-700">
              Ampere 40 TFLOPS
            </td>
          </tr>

          <tr>
            <td className="px-4 py-3 border-y border-gray-300 font-semibold">
              Ray Tracing Cores
            </td>
            <td className="px-4 py-3 border-y border-gray-300">
              3ª geração, 191 TFLOPS
            </td>
            <td className="px-4 py-3 border-y border-gray-300 bg-gray-700">
              2ª geração 78 TFLOPS
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-y border-gray-300 font-semibold">
              Tensor Cores (AI)
            </td>
            <td className="px-4 py-3 border-y border-gray-300">
              4ª geração, 1321 AI TOPS
            </td>
            <td className="px-4 py-3 border-y border-gray-300 bg-gray-700">
              3ª geração 320 AI TOPS
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-y border-gray-300 font-semibold">
              NVENC
            </td>
            <td className="px-4 py-3 border-y border-gray-300">
              2x 8ª geração com AV1
            </td>
            <td className="px-4 py-3 border-y border-gray-300 bg-gray-700">
              1x 7th Gen
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-y border-gray-300 font-semibold">
              VRAM
            </td>
            <td className="px-4 py-3 border-y border-gray-300">24 GB GDDR6X</td>
            <td className="px-4 py-3 border-y border-gray-300 bg-gray-700">
              24 GB GDDR6X
            </td>
          </tr>
        </tbody>
      </table>
      <Button>Ver Especificações Completas</Button>
      <span className="text-center font-bold">
        Confira a Compatibilidade do Seu Sistema (RTX 4090 Founders Edition)
      </span>
    </div>
  );
}
