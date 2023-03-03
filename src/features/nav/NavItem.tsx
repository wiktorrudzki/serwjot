import React from 'react';

type Props = {
  children: React.ReactNode;
  href: string;
};

const NavItem = ({ children, href }: Props) => (
  <li
    className="transition-all w-full text-lg font-semibold border-b-2 border-gray-400
  sm:text-lg
  md:border-none md:w-auto md:mx-0 md:py-0 
  lg:text-xl
  xl:text-2xl"
  >
    <a
      className="pl-6 py-2 block w-full relative after:transition-all after:block after:duration-300
    md:pl-0 md:after:relative md:after:bottom-[-2px] md:after:left-[0] md:after:content-[''] md:after:m-auto md:after:bg-gray-400 md:after:h-[2px] md:after:w-0 md:hover:after:w-full"
      href={href}
    >
      {children}
    </a>
  </li>
);

export default NavItem;
