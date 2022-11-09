
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ShowAlertComponent } from './components/Container';

function App() {
  return (
    <>

      <header className="App-header">
        <p>
          This is a paragraph in App.js
        </p>
        <button onClick={() => alert('Thanks for clicking!')}>Click here</button>
      </header>
      <ShowAlertComponent />
    </>
  );
}

export default App;
