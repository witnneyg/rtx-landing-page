interface creationCharacteristicsCardsProps {
  title: string;
  description: string;
  more: string;
  img: string;
}

export function CreationCharacteristicsCards({
  title,
  description,
  more,
  img,
}: creationCharacteristicsCardsProps) {
  return (
    <div className="flex flex-col  gap-5 bg-black  pb-7">
      <img src={img} alt={title} />
      <div className="flex flex-col gap-5 pl-5">
        <span className="text-lg font-bold">{title}</span>
        <p>{description}</p>
        <span className="font-bold">{more} </span>
      </div>
    </div>
  );
}
