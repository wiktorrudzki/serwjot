import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Form as FormType, FormValues } from '../../hooks/useForm';

type Props = {
  children: React.ReactNode;
  btnContent: string;
  isError: boolean;
  form: FormValues;
  setForm: (key: keyof FormType | 'clear', value: string) => void;
};

const Form = ({ children, btnContent, isError, setForm }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const frontBtnRef = useRef<HTMLButtonElement>(null);
  const backBtnRef = useRef<HTMLButtonElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(
      process.env.VITE_EMAIL_SERVICE_ID,
      process.env.VITE_EMAIL_TEMPLATE_ID,
      process.env.VITE_EMAIL_USER_ID,
    );

    if (
      formRef.current &&
      import.meta.env.VITE_EMAIL_SERVICE_ID &&
      import.meta.env.VITE_EMAIL_TEMPLATE_ID &&
      import.meta.env.VITE_EMAIL_USER_ID
    )
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAIL_USER_ID,
        )
        .then(
          result => {
            console.log(result.text);

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
    <form
      ref={formRef}
      className="flex flex-col gap-[1rem] w-full"
      onSubmit={sendEmail}
    >
      {children}
      <div
        className={`card not:disabled:active:scale-[0.95] transition-all ${
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
          EMAIL SENT
        </button>
      </div>
    </form>
  );
};

export default Form;
