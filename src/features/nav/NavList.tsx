import { LegacyRef } from 'react';
import { useTranslation } from 'react-i18next';
import NavItem from './NavItem';

type Props = {
  styles?: string;
  ref?: LegacyRef<HTMLUListElement> | undefined;
  onClick?: () => void;
};

const NavList = ({ styles, ref, onClick }: Props) => {
  const { t } = useTranslation();

  return (
    <ul ref={ref} className={`${styles}`}>
      <NavItem onClick={onClick} href="#home">
        {t('nav-1')}
      </NavItem>
      <NavItem onClick={onClick} href="#about">
        {t('nav-2')}
      </NavItem>
      <NavItem onClick={onClick} href="#services">
        {t('nav-3')}
      </NavItem>
      <NavItem onClick={onClick} href="#gallery">
        {t('nav-4')}
      </NavItem>
      <NavItem onClick={onClick} href="#contact">
        {t('nav-5')}
      </NavItem>
    </ul>
  );
};

export default NavList;
