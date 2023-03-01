import { useTranslation } from 'react-i18next';
import service1 from '../images/service1.jpg';
import service2 from '../images/service2.jpg';
import service3 from '../images/service3.jpg';

export const services = () => {
  const { t } = useTranslation();

  return [
    {
      photo: service1,
      photoAlt: 'laptop',
      title: t('service-1-title'),
      description: t('service-1-description'),
    },
    {
      photo: service2,
      photoAlt: 'phone',
      title: t('service-2-title'),
      description: t('service-2-description'),
    },
    {
      photo: service3,
      photoAlt: 'ipad',
      title: t('service-3-title'),
      description: t('service-3-description'),
    },
  ];
};
