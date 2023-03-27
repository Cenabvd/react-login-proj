import React from 'react'
import ConnectHeader from './ConnectHeader';
import ConnectButtons from './ConnectButtons';
import ConnectDontHaveAccount from './ConnectDontHaveAccount';

function ConnectWith() {
  return (
    <section className='w-full h-1/3 text-center'>
      <ConnectHeader />
      < ConnectButtons/>
      <ConnectDontHaveAccount />
    </section>
  );
}

export default ConnectWith;