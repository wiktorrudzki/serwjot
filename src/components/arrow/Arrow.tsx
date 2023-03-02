type Props = {
  handleClick: () => void;
  isHidden: boolean;
  direction: 'left' | 'right';
};

const Arrow = ({ handleClick, isHidden, direction }: Props) => (
  <div
    onClick={() => handleClick()}
    className={`${isHidden && 'hidden'} ${
      direction === 'left'
        ? 'pl-[1rem] left-0 justify-start'
        : 'pr-[1rem] right-0 justify-end'
    } w-[20%] h-full cursor-pointer absolute top-[50%] translate-y-[-50%] flex items-center`}
  >
    <div
      className={`arrow-${direction} bg-gray-300 hover:bg-gray-200 w-[2rem] h-[2rem]`}
    ></div>
  </div>
);

export default Arrow;
