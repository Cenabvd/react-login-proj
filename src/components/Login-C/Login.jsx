import React from 'react'
import LoginHeader from './LoginHeader';
import LoginInputs from './LoginInputs';
import LoginBtn from './LoginBtn';
import LoginForgiveYourPassword from './LoginForgiveYourPassword';

function Login() {
  return (
    <section className='w-full h-2/3 text-center pt-10'>
      <LoginHeader />
      <LoginInputs />
      <LoginBtn />
      <LoginForgiveYourPassword />
    </section>
  );
}

export default Login;
