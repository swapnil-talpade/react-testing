import "./App.css";
import MUiMode from "./components/mui";
import Providers from "./providers";

function App() {
  return (
    <Providers>
      <div className="App">
        <MUiMode />
      </div>
    </Providers>
  );
}

export default App;
