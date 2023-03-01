import React from 'react';

type Props = {
  children: React.ReactNode;
  href: string;
};

const NavItem = ({ children, href }: Props) => (
  <li className="transition-all w-full text-lg sm:text-xl font-semibold border-b-2 border-gray-400 hover:text-gray-400 md:border-none md:w-auto md:mx-4 md:my-0 md:py-0 lg:text-2xl lg:mx-6 xl:mx-8">
    <a className="pl-6 py-2 block w-full md:pl-0" href={href}>
      {children}
    </a>
  </li>
);

export default NavItem;
