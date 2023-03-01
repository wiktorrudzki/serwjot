type Props = {
  photo: string;
  photoAlt: string;
  title: string;
  description: string;
};

const Service = ({ photo, title, description, photoAlt }: Props) => {
  return (
    <div className="px-[1rem] py-[2rem] bg-background flex flex-col gap-5 xl:gap-8 xl:max-w-[25rem] justify-center items-center rounded-md border-[1px] border-gray-300 border-t-[3px] border-t-gray-500">
      <img
        className="rounded-full w-[6.5rem] h-[6.5rem] md:w-[7rem] md:h-[7rem] xl:w-[9rem] xl:h-[9rem]"
        src={photo}
        alt={photoAlt}
      />
      <h3 className="text-xl md:text-2xl lg:text-[1.7rem] xl:text-3xl font-semibold">
        {title.toUpperCase()}
      </h3>
      <p className="text-base lg:text-lg text-center break-words">
        {description}
      </p>
    </div>
  );
};

export default Service;
