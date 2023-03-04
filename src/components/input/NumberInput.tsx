import Input from './Input';

type Props = Omit<React.ComponentProps<typeof Input>, 'type'>;

const NumberInput = (props: Props) => <Input {...props} />;

export default NumberInput;
