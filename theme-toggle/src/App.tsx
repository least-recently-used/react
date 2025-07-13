import { useState } from 'react';
import './ThemeToggle.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'app dark' : 'app light'}>
      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'} Enabled</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
