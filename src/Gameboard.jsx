import GameboardRow from "./Components/Gameboard/GameboardRow";

const Gameboard = () => {
  return (
    <div className="h-[50vh] w-[80%] max-w-[600px] grid place-items-center mx-auto">
      <div className="flex flex-col gap-1">
        <GameboardRow />
        <GameboardRow />
        <GameboardRow />
        <GameboardRow />
        <GameboardRow />
        <GameboardRow />
      </div>
    </div>
  );
};
export default Gameboard;
