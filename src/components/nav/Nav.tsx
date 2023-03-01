import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import xIcon from '../../assets/icons/x-icon.svg';
import barsIcon from '../../assets/icons/bars-icon.svg';
import NavList from './NavList';

const Nav = () => {
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-screen flex flex-col sticky top-0 left-0 shadow-2xl">
      <nav className="flex flex-wrap justify-between relative z-10 px-4 py-5 sm:py-6 bg-nav">
        <button>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 lg:text-5xl">
            {t('title')}
          </h2>
        </button>
        <button onClick={() => setShowMenu(prev => !prev)}>
          <img className="md:hidden w-6" src={showMenu ? xIcon : barsIcon} />
        </button>
        <NavList styles="hidden md:flex self-center text-gray-200" />
      </nav>
      <NavList
        styles={`${
          showMenu ? 'top-full' : 'top-[-324px]'
        } absolute flex flex-col sm:gap-6 pb-6 sm:pb-8 gap-4 w-full px-4 md:hidden text-gray-200 transition-all duration-500 bg-nav`}
      />
    </div>
  );
};

export default Nav;
