import React from 'react';
import cx from 'classnames';
import styles from './LoaderPage.module.scss';
import { ThemeContext } from '../../contexts';
import { NavLink, Outlet } from 'react-router-dom';
import CONSTANTS from '../../constants';
const { THEME } = CONSTANTS;

const LoaderPage = () => {
  const renderLoaderPage = ([theme]) => {
    const className = cx(styles.loaderList, {
      [styles.light]: theme === THEME.LIGHT,
      [styles.dark]: theme === THEME.DARK,
    });
    return (<>
      <ul className={className}>
        <li>
          <NavLink to="/load/events">events</NavLink>
        </li>
        <li>
          <NavLink to="/load/phones">phones</NavLink>
        </li>
      </ul>
      <Outlet />
    </>);
  };

  return <ThemeContext.Consumer>{renderLoaderPage}</ThemeContext.Consumer>;
};

export default LoaderPage;
