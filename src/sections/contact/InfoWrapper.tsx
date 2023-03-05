type Props = {
  src: string;
  children: React.ReactNode;
};

const InfoWrapper = ({ src, children }: Props) => (
  <span className="flex gap-[0.5rem]">
    <img className="w-[1.25rem]" src={src} alt="email icon" />
    {children}
  </span>
);

export default InfoWrapper;
