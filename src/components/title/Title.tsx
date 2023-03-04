import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Title = ({ children }: Props) => (
  <div className="flex flex-col items-center gap-[1rem] sm:gap-[1.5rem] md:gap-[2rem] lg:gap-[2.5rem] xl:gap-[3rem]">
    <h2 className="text-4xl md:text-5xl">
      {children?.toString().toUpperCase()}
    </h2>
    <div className="w-[5rem] md:w-[6rem] lg:w-[8rem] h-[3px] bg-gray-500"></div>
  </div>
);

export default Title;
