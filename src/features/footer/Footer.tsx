import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary pt-[2rem] text-white pb-[4rem] flex justify-around px-[8rem]">
      <div className="flex flex-col">
        <span className="text-lg">{t('title')}</span>
        <span>{t('license')}</span>
      </div>
      <ul className="flex gap-[0.75rem]">
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
