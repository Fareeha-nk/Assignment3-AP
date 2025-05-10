// Components/MovieCard.js
import { useTheme } from '../context/ThemeContext';

export default function MovieCard({ movie }) {
  const { theme } = useTheme();

  return (
    <div style={{
      border: '1px solid',
      borderColor: theme === 'dark' ? '#444' : '#ccc',
      backgroundColor: theme === 'dark' ? '#1e1e1e' : '#fff',
      color: theme === 'dark' ? '#fff' : '#000',
      padding: '1rem',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    }}>
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
    </div>
  );
}
