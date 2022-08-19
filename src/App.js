import './App.css';
import ThemeContextWrapper  from './ThemeContext/ContextWrapper'
import ToggleButton from './components/ToggleButton';

function App() {
  return (
    <ThemeContextWrapper>
        <div className="App">
          <header className="App-header">
            <ToggleButton/>
          </header>
        </div>
    </ThemeContextWrapper>
    
  );
}

export default App;
