import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="pl-[3rem] sm:pl-[5rem] md:pl-[9rem] lg:pl-[12rem] xl:pl-[14rem] flex justify-items-center items-center bg-home-background bg-cover after:content=[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-mobile-shadow md:after:bg-shadow">
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10">
        <h1 className="text-white z-[5] text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold">
          {t('home-title-1')}
          <br />
          {t('home-title-2')}
        </h1>
        <h4 className="text-white z-[5] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
          {t('home-subtitle')}
        </h4>
      </div>
    </section>
  );
};

export default Home;
