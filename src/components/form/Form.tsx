type Props = {
  children: React.ReactNode;
  btnContent: string;
};

const Form = ({ children, btnContent }: Props) => {
  return (
    <form className="flex flex-col gap-[1rem] w-full">
      {children}
      <button
        className="py-[0.75rem] px-[1.1rem] text-white w-full bg-secondary border-none rounded-none"
        type="submit"
      >
        {btnContent.toUpperCase()}
      </button>
    </form>
  );
};

export default Form;
