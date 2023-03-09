import { useTranslation } from 'react-i18next';
import FooterLink from './FooterLink';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary pt-[2rem] text-white pb-[2rem] md:pb-[4rem] flex flex-col gap-[2rem] md:gap-0 px-[2rem] md:flex-row justify-around md:px-[5rem] lg:px-[8rem]">
      <div className="flex flex-col">
        <span className="text-lg">{t('title')}</span>
        <span>{t('license')}</span>
        <span>{t('company')}</span>
        <span>{t('author')}</span>
      </div>
      <ul className="flex flex-col lg:flex-row gap-[0.75rem] text-[1.1rem]">
        <FooterLink href="#home">{t('nav-1')}</FooterLink>
        <FooterLink href="#about">{t('nav-2')}</FooterLink>
        <FooterLink href="#services">{t('nav-3')}</FooterLink>
        <FooterLink href="#gallery">{t('nav-4')}</FooterLink>
        <FooterLink href="#contact">{t('nav-5')}</FooterLink>
      </ul>
    </footer>
  );
};

export default Footer;
