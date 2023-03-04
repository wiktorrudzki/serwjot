type Props = React.ComponentPropsWithoutRef<'textarea'> & { error?: string };

const TextArea = ({ error, ...passTroughProps }: Props) => (
  <div className="flex flex-col gap-[0.3rem]">
    <textarea
      className="w-full py-[0.75rem] px-[1.1rem] outline-none border-[1px] shadow-input-shadow rounded-md text-black border-[#d4d7e5] border-solid
      placeholder:text-gray-400 focus:border-[1px] focus:border-[#d4d7e5]"
      {...passTroughProps}
    />
    <span className="text-red-500 text-[0.875rem]">{error}</span>
  </div>
);

export default TextArea;
