/* eslint-disable react/jsx-no-bind */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';

function LoginPage({ loginSuccess }) {
  const { locale } = React.useContext(LocaleContext);

  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  const pathRegister = '/register';

  return (
    <section>
      <div className="section-container flex flex-col">
        <h2 className="section-title">Login</h2>
        <LoginInput login={onLogin} />
        <p className="mr-6 text-xl text-white self-end">
          {locale === 'en' ? "Don't have an account?" : 'Belum memiliki akun?'}
          {' '}
          <Link className="hover:underline font-bold" to={pathRegister}>{locale === 'en' ? 'Register Here!' : 'Daftar Disini!'}</Link>
        </p>
      </div>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
