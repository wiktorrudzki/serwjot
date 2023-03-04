import { useTranslation } from 'react-i18next';
import photo from '../../assets/images/about.jpg';

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="md:pb-[2rem] flex flex-col justify-center bg-background md:grid md:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 px-10 sm:px-20 md:px-20 lg:px-28 xl:px-40"
    >
      <img
        className="w-[12rem] sm:w-[13rem] md:w-[18rem] lg:w-[21rem] xl:w-[28rem] self-center justify-self-end rounded-bl-[80px] rounded-tr-[80px]"
        src={photo}
        alt="photo"
      />
      <div className="flex flex-col gap-3 sm:gap-4 md:gap-8 lg:gap-10 justify-center">
        <h2 className="text-[2rem] lg:text-5xl xl:text-7xl font-bold delay-200">
          {t('about-title')}
        </h2>
        <div className="w-[5rem] lg:w-[8rem] xl:w-[10rem] h-[5px] bg-gray-400"></div>
        <p className="text-[0.85rem] md:text-sm lg:text-[0.95rem] xl:text-lg lg:pb-20 xl:p-0">
          {t('about-description-1')}
          <br /> <br />
          {t('about-description-2')}
        </p>
      </div>
    </section>
  );
};

export default About;
