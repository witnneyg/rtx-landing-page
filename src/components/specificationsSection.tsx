import { Button } from "./button";

export function SpecificationsSection() {
  return (
    <div className="">
      <h2>Especificações</h2>
      <table>
        <thead></thead>
        <thead>RTX 4090</thead>
        <thead>RTX 3090</thead>
        <tbody>DLSS</tbody>
        <tbody>DLSS 3</tbody>
        <tbody>DLSS 2</tbody>
      </table>
      <Button>Ver Especificações Completas</Button>
      <span>
        Confira a Compatibilidade do Seu Sistema (RTX 4090 Founders Edition)
      </span>
    </div>
  );
}
