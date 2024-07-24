import React from 'react';
import cx from 'classnames';
import styles from './SignInPage.module.scss';
import { ThemeContext } from '../../contexts';
import SignInForm from '../../components/SignInForm';
import CONSTANTS from '../../constants';
const { THEME } = CONSTANTS;

const SignInPage = () => {
  const renderSignInPage = ([theme]) => {
    const className = cx(styles.form, {
      [styles.light]: theme === THEME.LIGHT,
      [styles.dark]: theme === THEME.DARK,
    });
    return <SignInForm className={className} />;
  };

  return <ThemeContext.Consumer>{renderSignInPage}</ThemeContext.Consumer>;
};

export default SignInPage;
