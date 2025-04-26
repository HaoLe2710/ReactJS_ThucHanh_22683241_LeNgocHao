// src/features/ThemeToggle/ThemeToggle.jsx
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './themeSlice';

export default function ThemeToggle() {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const styles = {
    padding: '1rem',
    margin: '1rem',
    border: '1px solid gray',
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff'
  };

  return (
    <div style={styles}>
      <h2>🔁 Toggle Theme</h2>
      <p>Current Theme: <strong>{theme}</strong></p>
      <button onClick={() => dispatch(toggleTheme())}>
        Toggle to {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </div>
  );
}
