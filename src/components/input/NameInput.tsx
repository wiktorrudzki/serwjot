import Input from './Input';

type Props = Omit<React.ComponentProps<typeof Input>, 'type'>;

const NameInput = (props: Props) => {
  return <Input {...props} />;
};

export default NameInput;
