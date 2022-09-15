import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import LocaleContext from '../contexts/LocaleContext';

function RegisterInput({ register }) {
  const { locale } = React.useContext(LocaleContext);
  const [name, onNameChangeHandler] = useInput('');
  const [email, onEmailChangeHandler] = useInput('');
  const [password, onPasswordChangeHandler] = useInput('');
  const [confirmPassword, onConfirmPasswordChangeHandler] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    register({
      name,
      email,
      password,
    });
  };

  return (
    <form className="section-container pt-5 pb-2 flex flex-col" onSubmit={onSubmitHandler}>
      <input className="mb-2" type="text" placeholder={locale === 'en' ? 'Name' : 'Nama'} value={name} onChange={onNameChangeHandler} />
      <input type="email" placeholder="Email" value={email} onChange={onEmailChangeHandler} />
      <input type="password" placeholder="Password" value={password} onChange={onPasswordChangeHandler} />
      <input type="password" placeholder={locale === 'en' ? 'Confirm Password' : 'Konfimasi Password'} value={confirmPassword} onChange={onConfirmPasswordChangeHandler} />
      <button className="input-button" type="submit">Register</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
