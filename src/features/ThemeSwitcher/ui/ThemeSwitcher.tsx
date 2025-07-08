import { useTheme } from '../../../shared/lib/theme/ThemeContext';
import { Button } from '../../../shared/ui/Button/Button';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      onClick={toggleTheme}>
      Текущая тема: {theme === 'light' ? 'светлая' : 'тёмная'}
    </Button>
  );
};