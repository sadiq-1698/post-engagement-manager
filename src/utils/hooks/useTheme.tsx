import { useEffect, useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('clepher-theme');
    return savedTheme ? savedTheme : 'winter';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('clepher-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'winter' ? 'night' : 'winter'));
  };

  return { theme, toggleTheme };
};

export default useTheme;
