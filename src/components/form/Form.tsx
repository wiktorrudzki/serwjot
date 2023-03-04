import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Form as FormType } from '../../types';

type Props = {
  children: React.ReactNode;
  btnContent: string;
  isError: boolean;
  setForm: (key: keyof FormType | 'clear', value: string) => void;
  btnSentContent: string;
};

const Form = ({
  children,
  btnContent,
  isError,
  setForm,
  btnSentContent,
}: Props) => {
  const frontBtnRef = useRef<HTMLButtonElement>(null);
  const backBtnRef = useRef<HTMLButtonElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        e.currentTarget,
        import.meta.env.VITE_EMAIL_USER_ID,
      )
      .then(
        () => {
          if (frontBtnRef.current && backBtnRef.current) {
            frontBtnRef.current.style.animation = 'frontBtn 2.5s';
            backBtnRef.current.style.animation = 'backBtn 2.5s';

            setTimeout(() => {
              if (frontBtnRef.current && backBtnRef.current) {
                frontBtnRef.current.style.animation = '';
                backBtnRef.current.style.animation = '';
              }
            }, 2500);
          }

          setForm('clear', '');
        },
        error => {
          console.log(error.text);
        },
      );
  };

  return (
    <form className="flex flex-col gap-[1rem] w-full" onSubmit={sendEmail}>
      {children}
      <div
        className={`relative not:disabled:active:scale-[0.95] transition-all ${
          isError ? 'cursor-not-allowed opacity-[0.7]' : ''
        }`}
      >
        <button
          ref={frontBtnRef}
          type="submit"
          disabled={isError}
          className="front py-[0.75rem] px-[1.1rem] text-white w-full bg-secondary border-none rounded-none disabled:opacity-[0.7] disabled:cursor-not-allowed"
        >
          {btnContent.toUpperCase()}
        </button>
        <button
          ref={backBtnRef}
          className={`back ${
            isError ? 'cursor-not-allowed opacity-[0.7]' : ''
          }`}
        >
          {btnSentContent.toUpperCase()}
        </button>
      </div>
    </form>
  );
};

export default Form;
