import React from 'react';
import { ThemeContext } from '../../contexts';
import WindowWork from '../../components/WindowWork';
import Tree from '../../components/Tree';
import CONSTANTS from '../../constants';
const { THEME } = CONSTANTS;

const HomePage = () => {
  // Изымаем тему из контекста темы
  const renderHomePage = ([theme]) => {
    // Формируем переменную, а потом на её основе стили вместо классов
    const isLight = theme === THEME.LIGHT;
    const styles = {
      backgroundColor: isLight ? 'white' : 'black',
      color: isLight ? 'black' : 'white',
    };
    // Применяем стили
    return (
      <div style={styles}>
        <WindowWork />
        <Tree />
      </div>
    );
  };

  // Изымаем значения из контекста темы, тут уже правильная реализация через коллбек !!!
  // Не забываем передавать в фигурных скобках, иначе передадим просто текст!
  return <ThemeContext.Consumer>{renderHomePage}</ThemeContext.Consumer>;
};

export default HomePage;
