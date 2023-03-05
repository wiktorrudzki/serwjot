import { useTranslation } from 'react-i18next';
import skladanie from '../../assets/images/skladanie.jpg';
import serwis from '../../assets/images/serwis.jpg';
import modernizacja from '../../assets/images/modernizacja.png';

export const services = () => {
  const { t } = useTranslation();

  return [
    {
      photo: skladanie,
      photoAlt: 'creating computer',
      title: t('service-1-title'),
      description: t('service-1-description'),
    },
    {
      photo: modernizacja,
      photoAlt: 'modernization',
      title: t('service-2-title'),
      description: t('service-2-description'),
    },
    {
      photo: serwis,
      photoAlt: 'repair computer',
      title: t('service-3-title'),
      description: t('service-3-description'),
    },
  ];
};
