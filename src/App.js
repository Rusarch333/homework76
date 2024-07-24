import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import cx from 'classnames';
import styles from './App.module.scss';
import { getComponentConstantsForLanguage } from './utils/utils';
import HomePage from './pages/Home';
import SignInPage from './pages/SignInPage';
import UsersLoaderPage from './pages/UsersLoaderPage';
import ErrorPage from './pages/ErrorPage';
import LoaderPage from './pages/LoaderPage';
import EventsBlock from './pages/LoaderPage/EventsBlock';
import PhonesBlock from './pages/LoaderPage/PhonesBlock';
import Header from './components/Header';

// Тут в отдельном файлике у нас созданы контексты для хранения авторизированного пользователя и выбраной темы
import { UserContext, ThemeContext, LanguageContext } from './contexts';

// Тут в отдельном файлике констант будем хранить строчные литералы, отвечающие за название/тип текущей темы
import CONSTANTS from './constants';
const { THEME, LANGUAGES, LANGUAGE_CONSTANTS } = CONSTANTS;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Будем хранить авторизированного пользователя в стейте, такой пользователь обычно должен быть доступен разным компонентам вне зависимости от уровня вложенности с помощью Контекста
      user: {
        id: 4,
        name: 'Stalone',
        email: 'bred@gmail.com',
        password: 123,
        ava: '/images/noname.webp',
      },
      // Тут же в стейте будем хранить тему и язык
      theme: THEME.LIGHT,
      language: LANGUAGES.ENGLISH,
    };
  }
  // Метод для изменения темы в стейте
  toggleTheme = () => {
    const { theme } = this.state;
    this.setState({ theme: theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT });
  };
  setLanguage = (language) => {
    this.setState({
      language: language,
    });
  };
  render() {
    const { user, theme, language } = this.state;
    const themeClass = cx({
      [styles.light]: theme === THEME.LIGHT,
      [styles.dark]: theme === THEME.DARK,
    });
    const bodyLikeContainerClasses = cx(styles['body-like-size'], themeClass);
    const FOOTER_LANGUAGE_CONSTANTS = getComponentConstantsForLanguage(
      LANGUAGE_CONSTANTS,
      'FOOTER',
      language
    );
    return (
      <>
        {/* Записываем текущую тему, через провайдер в контекст темы, а также метод переключения темы, подписываем Сonsumer-components-детей провайдера на изменения провайдера */}
        <ThemeContext.Provider value={[theme, this.toggleTheme]}>
          {/* Записываем текущего юзера, через провайдер в контекст юзера, подписываем Сonsumer-components-детей провайдера на изменения провайдера */}
          <UserContext.Provider value={user}>
            <LanguageContext.Provider value={[language, this.setLanguage]}>
              <BrowserRouter>
                <div className={bodyLikeContainerClasses}>
                  <Header />
                  <main>
                    <Routes>
                      <Route path="/" element={<HomePage />}></Route>
                      <Route
                        path="/users"
                        element={<UsersLoaderPage />}
                      ></Route>
                      <Route path="/sign-in" element={<SignInPage />}></Route>

                      <Route path="/load/" element={<LoaderPage />}>
                        <Route path="events" element={<EventsBlock />} />
                        <Route path="phones" element={<PhonesBlock />} />
                      </Route>

                      <Route path="*" element={<ErrorPage />}></Route>
                    </Routes>
                  </main>
                  <footer className={themeClass}>
                    {FOOTER_LANGUAGE_CONSTANTS.CONTENT}
                  </footer>
                </div>
              </BrowserRouter>
            </LanguageContext.Provider>
          </UserContext.Provider>
        </ThemeContext.Provider>
      </>
    );
  }
}

export default App;
