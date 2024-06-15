interface CreationNvidiaOptionsCardsProps {
  title: string;
  subTitle: string;
  description: string;
  img: string;
  id: string;
  more: string;
}

export function CreationNvidiaOptionsCards({
  title,
  subTitle,
  description,
  img,
  id,
  more,
}: CreationNvidiaOptionsCardsProps) {
  return (
    <div className="flex flex-col gap-5 text-start w-80 " key={id}>
      <img src={img} alt={subTitle} />
      <span className="font-bold text-lg">{subTitle}</span>
      <h3 className="text-2xl font-bold">{title}</h3>
      <span>{description}</span>
      <span className="font-bold">{more}</span>
    </div>
  );
}
