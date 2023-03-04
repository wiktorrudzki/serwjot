type Props = {
  children: React.ReactNode;
  btnContent: string;
  isError: boolean;
};

const Form = ({ children, btnContent, isError }: Props) => (
  <form className="flex flex-col gap-[1rem] w-full">
    {children}
    <button
      disabled={isError}
      className="py-[0.75rem] px-[1.1rem] text-white w-full bg-secondary border-none rounded-none disabled:opacity-[0.7] disabled:cursor-not-allowed"
      type="submit"
    >
      {btnContent.toUpperCase()}
    </button>
  </form>
);

export default Form;
