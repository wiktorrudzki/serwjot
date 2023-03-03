type InputProps = React.ComponentPropsWithoutRef<'input'>;

type Props = InputProps & { error?: string };

const Input = ({ type, placeholder, onChange, value, error }: Props) => {
  return (
    <div className="flex flex-col gap-[0.3rem]">
      <input
        className="w-full py-[0.75rem] px-[1.1rem] border-[1px] outline-none shadow-input-shadow rounded-md text-black border-[#d4d7e5] border-solid
      placeholder:text-gray-400"
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
      />
      <span className="text-red-500 text-[0.75rem] md:text-[0.875rem]">
        {error}
      </span>
    </div>
  );
};

export default Input;
