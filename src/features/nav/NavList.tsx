import { useTranslation } from 'react-i18next';
import NavItem from './NavItem';

type Props = {
  styles?: string;
};

const NavList = ({ styles }: Props) => {
  const { t } = useTranslation();

  return (
    <ul className={`${styles}`}>
      <NavItem href="#home">{t('nav-1')}</NavItem>
      <NavItem href="#about">{t('nav-2')}</NavItem>
      <NavItem href="#services">{t('nav-3')}</NavItem>
      <NavItem href="#gallery">{t('nav-4')}</NavItem>
      <NavItem href="#contact">{t('nav-5')}</NavItem>
    </ul>
  );
};

export default NavList;
