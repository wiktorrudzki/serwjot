import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import xIcon from '../../assets/icons/x-icon.svg';
import barsIcon from '../../assets/icons/bars-icon.svg';
import NavList from './NavList';

import logo from '../../assets/serwjot.png';

const Nav = () => {
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      onBlur={() => setShowMenu(false)}
      className="w-screen flex flex-col fixed top-0 left-0 shadow-custom z-10"
    >
      <nav className="flex flex-wrap justify-between relative z-10 px-5 py-3 sm:py-4 bg-secondary lg:px-8 xl:px-10">
        <button className="">
          <a
            className="flex gap-[0.5rem] md:gap-[1rem] items-center"
            href="#home"
          >
            <img
              className="w-[2.5rem] md:w-[4rem]"
              src={logo}
              alt="serwjot logo"
            />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-200 lg:text-4xl">
              {t('title')}
            </h2>
          </a>
        </button>
        <button onClick={() => setShowMenu(prev => !prev)}>
          <img className="md:hidden w-6" src={showMenu ? xIcon : barsIcon} />
        </button>
        <NavList styles="hidden md:flex self-center sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 text-gray-200" />
      </nav>
      <NavList
        styles={`${
          showMenu ? 'top-full' : 'top-[-324px]'
        } absolute flex flex-col sm:gap-6 pb-6 sm:pb-8 gap-4 w-full px-6 md:hidden text-gray-200 transition-all duration-500 bg-secondary`}
      />
    </div>
  );
};

export default Nav;
