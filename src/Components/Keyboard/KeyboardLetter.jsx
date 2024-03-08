const KeyboardLetter = (props) => {
  const { letter } = props;
  return (
    <div className="size-[60px] grid place-items-center bg-zinc-500 text-white font-bold rounded-sm">
      {letter}
    </div>
  );
};
export default KeyboardLetter;
