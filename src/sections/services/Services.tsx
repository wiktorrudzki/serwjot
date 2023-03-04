import { Service, TitleWrapper } from '../../components';
import { services as data } from '../../data/services/services';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const services = data();

  return (
    <section
      id="services"
      className="px-12 sm:px-24 md:px-12 bg-primary flex flex-col gap-10 lg:gap-16 items-center justify-start min-h-0 pb-[4rem]"
    >
      <TitleWrapper title={t('services-title')}>
        <div className="flex flex-col gap-6 justify-center items-center md:flex-row lg:mx-[2rem]">
          {services.map(service => (
            <Service key={service.photo} {...service} />
          ))}
        </div>
      </TitleWrapper>
    </section>
  );
};

export default Services;
