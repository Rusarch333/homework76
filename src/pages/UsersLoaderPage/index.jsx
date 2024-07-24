import React from 'react';
import cx from 'classnames';
import styles from './UsersLoaderPage.module.scss';
import { ThemeContext } from '../../contexts';
import UsersLoader from '../../components/UsersLoader';
import CONSTANTS from '../../constants';
const { THEME } = CONSTANTS;

const UsersLoaderPage = () => {
  const renderUsersLoaderPage = ([theme]) => {
    const className = cx({
      [styles.light]: theme === THEME.LIGHT,
      [styles.dark]: theme === THEME.DARK,
    });
    return <UsersLoader className={className} />;
  };

  return <ThemeContext.Consumer>{renderUsersLoaderPage}</ThemeContext.Consumer>;
};

export default UsersLoaderPage;
