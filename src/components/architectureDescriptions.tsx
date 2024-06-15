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
    <div key={id}>
      <img src={img} alt="arquitetura informatica" />
      <h5>{title}</h5>
      <span>{description}</span>
    </div>
  );
}
