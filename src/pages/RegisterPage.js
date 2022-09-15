/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import LocaleContext from '../contexts/LocaleContext';
import { register } from '../utils/network-data';

function RegisterPage() {
  const { locale } = React.useContext(LocaleContext);

  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);

    if (!error) {
      navigate('/');
    }
  }

  const pathLogin = '/';

  return (
    <section>
      <div className="section-container flex flex-col">
        <h2 className="section-title">Register</h2>
        <RegisterInput register={onRegisterHandler} />
        <p className="mr-6 text-xl self-end">
          {locale === 'en' ? 'Back to ' : 'Kembali ke '}
          {' '}
          <Link className="hover:underline font-bold" to={pathLogin}>Login</Link>
        </p>
      </div>
    </section>
  );
}

export default RegisterPage;
