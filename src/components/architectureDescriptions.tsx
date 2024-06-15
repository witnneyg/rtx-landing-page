interface architectureDescriptionProps {
  title: string;
  description: string;
  img: string;
  id: string;
}

export function ArchitectureDescription({
  title,
  description,
  img,
  id,
}: architectureDescriptionProps) {
  return (
    <div key={id} className="flex flex-col items-center gap-2">
      <img src={img} alt="arquitetura informatica" className="w-28 mt-8" />
      <h5 className="font-bold text-lg">{title}</h5>
      <span>{description}</span>
    </div>
  );
}
