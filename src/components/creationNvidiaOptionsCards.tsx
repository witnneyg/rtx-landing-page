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
    <div
      className="flex flex-col gap-4 px-5 text-start mt-4 w-2/3 md:w-[55%] lg:w-2/3 "
      key={id}
    >
      <img src={img} alt={subTitle} className="w-full" />
      <span className="font-bold text-lg">{subTitle}</span>
      <h3 className="text-2xl font-bold lg:text-3xl">{title}</h3>
      <span>{description}</span>
      <span className="font-bold">{more}</span>
    </div>
  );
}
