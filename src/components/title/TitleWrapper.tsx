import Title from './Title';

type Props = React.ComponentPropsWithoutRef<typeof Title> & {
  children: React.ReactNode;
  title: string;
};

const TitleWrapper = ({ children, title }: Props) => {
  return (
    <div className="flex flex-col gap-[1rem] sm:gap-[1.5rem] md:gap-[2rem] lg:gap-[2.5rem] xl:gap-[3rem]">
      <Title>{title}</Title>
      {children}
    </div>
  );
};

export default TitleWrapper;
