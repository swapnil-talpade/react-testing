import "./App.css";
import Skills from "./components/skills";

function App() {
  return (
    <div className="App">
      <Skills skills={["HTML", "CSS"]} />
    </div>
  );
}

export default App;
