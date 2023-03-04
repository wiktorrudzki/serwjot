import { useTranslation } from 'react-i18next';
import {
  EmailInput,
  Form,
  NameInput,
  NumberInput,
  TitleWrapper,
} from '../../components';
import emailIcon from '../../assets/icons/email-icon.svg';
import useForm from '../../hooks/useForm';
import TextArea from '../../components/input/TextArea';

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm, errors, isError] = useForm();

  return (
    <section
      id="contact"
      className="pb-0 bg-primary flex flex-col gap-[1rem] sm:gap-[1.5rem] md:gap-[2rem] lg:gap-[2.5rem] xl:gap-[3rem] items-center justify-center w-full"
    >
      <TitleWrapper title={t('contact-title')}>
        <div className="flex gap-[3rem] px-[1rem] sm:px-[2rem] md:px-[5rem] lg:px-[12rem] xl:px-[16rem] md:gap-0 flex-col md:flex-row w-full">
          <div className="w-full flex md:justify-center gap-[0.75rem]">
            <div className="flex flex-col gap-[0.75rem]">
              <span>{t('contact-place')}</span>
              <span className="flex gap-[0.5rem]">
                <img className="w-[1.25rem]" src={emailIcon} alt="email icon" />
                {t('contact-email')}
              </span>
            </div>
          </div>
          <Form
            isError={isError}
            btnContent={t('contact-btn')}
            setForm={setForm}
            btnSentContent={t('contact-btn-sent')}
          >
            <div className="grid grid-cols-2 gap-[1.75rem]">
              <NameInput
                onChange={e => setForm('name', e.target.value)}
                placeholder="Name"
                error={errors.name}
                value={form.name}
                name="name"
                required
              />
              <NumberInput
                onChange={e => setForm('number', e.target.value)}
                placeholder="Phone"
                error={errors.number}
                value={form.number}
                name="number"
              />
            </div>
            <EmailInput
              onChange={e => setForm('email', e.target.value)}
              placeholder="Email address"
              error={errors.email}
              value={form.email}
              name="email"
              required
            />
            <TextArea
              onChange={e => setForm('message', e.target.value)}
              className="w-full py-[0.75rem] px-[1.1rem] outline-none border-1 shadow-input-shadow rounded-md text-black border-[#d4d7e5] border-solid
      placeholder:text-gray-400"
              placeholder="Message"
              error={errors.message}
              value={form.message}
              name="message"
              required
            />
          </Form>
        </div>
      </TitleWrapper>
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
