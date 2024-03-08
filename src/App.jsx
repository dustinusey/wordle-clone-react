import Gameboard from "./Gameboard";
import Header from "./Header";
import Keyboard from "./Keyboard";

const App = () => {
  return (
    <div className="bg-zinc-900 h-screen">
      <Header />
      <Gameboard />
      <Keyboard />
    </div>
  );
};
export default App;
