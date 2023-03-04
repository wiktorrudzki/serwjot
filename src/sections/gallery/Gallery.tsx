import { useTranslation } from 'react-i18next';
import { Slider, Title, TitleWrapper } from '../../components';
import { gallery } from '../../data/gallery/gallery';

const Gallery = () => {
  const { t } = useTranslation();

  return (
    <section
      id="gallery"
      className="px-0 md:px-[2rem] lg:px-[9rem] xl:px-[16rem] bg-background flex flex-col gap-10 xl:gap-16 items-center justify-center"
    >
      <TitleWrapper title={t('gallery-title')}>
        <Slider data={gallery} />
      </TitleWrapper>
    </section>
  );
};

export default Gallery;
