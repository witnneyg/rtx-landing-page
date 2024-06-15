interface creationCharacteristicsCardsProps {
  title: string;
  description: string;
  more: string;
}

export function CreationCharacteristicsCards({
  title,
  description,
  more,
}: creationCharacteristicsCardsProps) {
  return (
    <div className="">
      <span>{title}</span>
      <p>{description}</p>
      <span>{more} </span>
    </div>
  );
}
