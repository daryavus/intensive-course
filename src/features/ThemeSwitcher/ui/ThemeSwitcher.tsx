import { useTheme } from '../../../shared/lib/theme/ThemeContext';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Текущая тема: {theme === 'light' ? 'светлая' : 'тёмная'}
    </button>
  );
};