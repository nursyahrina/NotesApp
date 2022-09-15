import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChangeHandler] = useInput('');
  const [password, onPasswordChangeHandler] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    login({
      email,
      password,
    });
  };

  return (
    <form className="section-container pt-5 pb-2 flex flex-col" onSubmit={onSubmitHandler}>
      <input type="email" placeholder="Email" value={email} onChange={onEmailChangeHandler} />
      <input type="password" placeholder="Password" value={password} onChange={onPasswordChangeHandler} />
      <button className="input-button" type="submit">Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
