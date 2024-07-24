import React from 'react';
import cx from 'classnames';
import Icon from '@mdi/react';
import { mdiWhiteBalanceSunny, mdiWeatherNight } from '@mdi/js';
import styles from './Header.module.scss';
import { UserContext, ThemeContext, LanguageContext } from '../../contexts';
import Menu from '../Menu';
import CONSTANTS from '../../constants';
const { THEME, LANGUAGES } = CONSTANTS;

const Header = () => {
  const getThemeClass = (theme) =>
    cx({
      [styles.light]: theme === THEME.LIGHT,
      [styles.dark]: theme === THEME.DARK,
    });
  return (
    // Считываем с контекста темы - тему и метод переключающий тему, используя библиотеку classnames (как cx())
    // Формируем название классов, первое стандартное для хедера, второе в зависимости от записанной темы внутри провайдера
    // Данные классы уже прописаны в SCSS хедера
    <ThemeContext.Consumer>
      {([theme, toggleTheme]) => {
        const classHeader = cx(styles.header, getThemeClass(theme));
        const handleClickThemeIcon = () => {
          toggleTheme();
        };
        return (
          // Считываем с контекста пользователя - самого пользователя, а точнее ссылку на его аватар
          <UserContext.Consumer>
            {({ ava }) => {
              return (
                <LanguageContext.Consumer>
                  {([language, setLanguage]) => {
                    const handleChangeLanguage = ({ target }) => {
                      setLanguage(target.value);
                    };
                    // Функция вывода опшинов селекта по национальностям
                    const showLanguageOptions = (language, i) => (
                      <option key={i} value={language}>
                        {language}
                      </option>
                    );
                    return (
                      /* Назначаем хедеру класс, а также дополнительный класс зависящий от темы */
                      <header className={classHeader}>
                        <Menu />
                        <select
                          className={styles['header__language-select']}
                          name="language-select"
                          value={language}
                          onChange={handleChangeLanguage}
                        >
                          {Object.values(LANGUAGES).map(showLanguageOptions)}
                        </select>

                        <Icon
                          onClick={handleClickThemeIcon}
                          // Выбираем иконку, манипулируя путём к иконке, в зависимости от выбранной темы из контекста темы
                          path={
                            theme === THEME.LIGHT
                              ? mdiWhiteBalanceSunny
                              : mdiWeatherNight
                          }
                          size={1}
                        />
                        {/* Рендерим картинку с выгруженной авкой из контекста юзера */}
                        <img src={ava} alt="ava" />
                      </header>
                    );
                  }}
                </LanguageContext.Consumer>
              );
            }}
          </UserContext.Consumer>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Header;
