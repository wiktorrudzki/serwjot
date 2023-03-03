import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary pt-[2rem] text-white pb-[2rem] md:pb-[4rem] flex flex-col gap-[2rem] md:gap-0 px-[2rem] md:flex-row justify-around md:px-[5rem] lg:px-[8rem]">
      <div className="flex flex-col">
        <span className="text-lg">{t('title')}</span>
        <span>{t('license')}</span>
      </div>
      <ul className="flex flex-col lg:flex-row gap-[0.75rem] text-[1.1rem]">
        <li>
          <a href="#home">{t('nav-1').toUpperCase()}</a>
        </li>
        <li>
          <a href="#about">{t('nav-2').toUpperCase()}</a>
        </li>
        <li>
          <a href="#services">{t('nav-3').toUpperCase()}</a>
        </li>
        <li>
          <a href="#gallery">{t('nav-4').toUpperCase()}</a>
        </li>
        <li>
          <a href="#contact">{t('nav-5').toUpperCase()}</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
