import Input from './Input';

type Props = Omit<React.ComponentProps<typeof Input>, 'type'>;

const EmailInput = (props: Props) => <Input type="email" {...props} />;

export default EmailInput;
