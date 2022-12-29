import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ShowAlertComponent } from "./components/Container";
import Activities from "./components/Activities";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Find something to do</p>
        <button onClick={() => alert("Thanks for clicking!")}>
          Click here
        </button>
      </header>
      <ShowAlertComponent />
      <Activities />
    </div>
  );
}

export default App;
