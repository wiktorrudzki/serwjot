import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Title = ({ children }: Props) => (
  <>
    <h2 className="text-4xl md:text-5xl lg:text-6xl">
      {children?.toString().toUpperCase()}
    </h2>
    <div className="w-[5rem] md:w-[6rem] lg:w-[8rem] h-[3px] bg-gray-500"></div>
  </>
);

export default Title;
