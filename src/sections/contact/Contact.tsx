import { useTranslation } from 'react-i18next';
import {
  EmailInput,
  Form,
  NameInput,
  NumberInput,
  Title,
} from '../../components';
import emailIcon from '../../assets/icons/email-icon.svg';
import useForm from '../../hooks/useForm';
import TextArea from '../../components/input/TextArea';

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm, errors] = useForm();

  console.log(errors);

  return (
    <section
      id="contact"
      className="bg-primary flex flex-col gap-[3rem] items-center justify-center w-full xl:px-[16rem]"
    >
      <Title>{t('contact-title')}</Title>
      <div className="flex center w-full">
        <div className="w-full flex justify-center gap-[0.75rem]">
          <div className="flex flex-col  gap-[0.75rem]">
            <span>{t('contact-place')}</span>
            <span className="flex gap-[0.5rem]">
              <img className="w-[1.25rem]" src={emailIcon} alt="email icon" />
              {t('contact-email')}
            </span>
          </div>
        </div>
        <Form btnContent={t('contact-btn')}>
          <div className="grid grid-cols-2 gap-[1.75rem]">
            <NameInput
              onChange={e => setForm('name', e.target.value)}
              placeholder="Name"
              error={errors.name}
            />
            <NumberInput
              onChange={e => setForm('number', e.target.value)}
              placeholder="Phone"
              error={errors.number}
            />
          </div>
          <EmailInput
            onChange={e => setForm('email', e.target.value)}
            placeholder="Email address"
            error={errors.email}
          />
          <TextArea
            onChange={e => setForm('message', e.target.value)}
            className="w-full py-[0.75rem] px-[1.1rem] outline-none border-1 shadow-input-shadow rounded-md text-black border-[#d4d7e5] border-solid
      placeholder:text-gray-400"
            placeholder="Message"
            error={errors.message}
          />
        </Form>
      </div>
      <iframe
        className="w-full"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2553.9929184971556!2d19.2805012!3d50.1986633!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x49a8b58cef629351%3A0x477dbcffcc50627f!2sSerwis%20Komputerowy%20SERWJOT!5e0!3m2!1spl!2spl!4v1677860728029!5m2!1spl!2spl"
        height="450"
        style={{ border: '0' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Contact;
