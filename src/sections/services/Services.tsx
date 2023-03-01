import { Service, Title } from '../../components';
import { services as data } from '../../assets/services/services';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const services = data();

  return (
    <section
      id="services"
      className="px-10 sm:px-24 md:px-12 bg-primary flex flex-col gap-10 lg:gap-16 items-center justify-center"
    >
      <Title>{t('services-title')}</Title>
      <div className="flex flex-col gap-6 justify-center items-center md:flex-row lg:mx-[2rem]">
        {services.map(({ photo, photoAlt, title, description }) => (
          <Service
            photo={photo}
            photoAlt={photoAlt}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
