// Components/CustomButton.js
import { useTheme } from '../context/ThemeContext';

export default function CustomButton({ onClick, label }) {
  const { theme } = useTheme();

  return (
    <button onClick={onClick} style={{
      backgroundColor: theme === 'dark' ? '#e50914' : '#0070f3',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    }}>
      {label}
    </button>
  );
}
