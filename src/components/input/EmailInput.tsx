import Input from './Input';

type Props = Omit<React.ComponentProps<typeof Input>, 'type'>;

const EmailInput = (props: Props) => {
  return <Input {...props} />;
};

export default EmailInput;
