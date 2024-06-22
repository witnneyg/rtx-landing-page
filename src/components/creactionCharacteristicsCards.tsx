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
    <div className="flex  flex-col bg-black  w-full sm:w-[300px] xl:w-[400px] ">
      <img src={img} alt={title} className="w-full  object-cover" />
      <div className="flex flex-col flex-grow justify-between  gap-5 pl-5 p-4 ">
        <span className="text-lg font-bold">{title}</span>
        <p>{description}</p>
        <span className="font-bold ">{more} </span>
      </div>
    </div>
  );
}
