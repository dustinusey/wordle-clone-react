import KeyboardLetter from "./Components/Keyboard/KeyboardLetter";

const Keyboard = () => {
  const backspace = (
    <svg
      className="w-6 h-6 "
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 16.9V7a1 1 0 0 0-1.6-.8l-6 5a1 1 0 0 0 0 1.5l6 4.9a1 1 0 0 0 1.6-.8Z"
      />
    </svg>
  );
  return (
    <div className="h-[50vh] w-[80%] max-w-[600px] m-auto flex flex-col gap-2">
      {/* key row */}
      <div className="flex place-items-center gap-2 justify-center">
        <KeyboardLetter letter={"Q"} />
        <KeyboardLetter letter={"W"} />
        <KeyboardLetter letter={"E"} />
        <KeyboardLetter letter={"R"} />
        <KeyboardLetter letter={"T"} />
        <KeyboardLetter letter={"Y"} />
        <KeyboardLetter letter={"U"} />
        <KeyboardLetter letter={"I"} />
        <KeyboardLetter letter={"O"} />
        <KeyboardLetter letter={"P"} />
      </div>

      {/* key row */}
      <div className="flex place-items-center gap-2 justify-center">
        <KeyboardLetter letter={"A"} />
        <KeyboardLetter letter={"S"} />
        <KeyboardLetter letter={"D"} />
        <KeyboardLetter letter={"F"} />
        <KeyboardLetter letter={"G"} />
        <KeyboardLetter letter={"H"} />
        <KeyboardLetter letter={"J"} />
        <KeyboardLetter letter={"K"} />
        <KeyboardLetter letter={"L"} />
      </div>

      {/* key row */}
      <div className="flex place-items-center gap-2 justify-center">
        <KeyboardLetter letter={"Z"} />
        <KeyboardLetter letter={"X"} />
        <KeyboardLetter letter={"C"} />
        <KeyboardLetter letter={"V"} />
        <KeyboardLetter letter={"B"} />
        <KeyboardLetter letter={"N"} />
        <KeyboardLetter letter={"M"} />
        <KeyboardLetter letter={backspace} />
      </div>
    </div>
  );
};
export default Keyboard;
