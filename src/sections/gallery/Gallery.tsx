import { useTranslation } from 'react-i18next';
import { gallery } from '../../assets/gallery/gallery';
import { Slider, Title } from '../../components';

const Gallery = () => {
  const { t } = useTranslation();

  return (
    <section
      id="gallery"
      className="px-0 md:px-[2rem] lg:px-[9rem] xl:px-[16rem] bg-background flex flex-col gap-10 xl:gap-16 items-center justify-center"
    >
      <Title>{t('gallery-title')}</Title>
      <Slider data={gallery} />
    </section>
  );
};

export default Gallery;
