import GameboardLetter from "./GameboardLetter";

const GameboardRow = () => {
  return (
    <div className="flex gap-1 mx-auto">
      <GameboardLetter />
      <GameboardLetter />
      <GameboardLetter />
      <GameboardLetter />
      <GameboardLetter />
    </div>
  );
};
export default GameboardRow;
