import React from 'react'
import ConnectBtnFacebook from './ConnectBtnFacebook'
import ConnectBtnTwitter from './ConnectBtnTwitter'

function ConnectButtons() {
  return (
    <section className='space-x-5 mt-6'>
        <ConnectBtnFacebook />
        <ConnectBtnTwitter />
    </section>
  )
}

export default ConnectButtons
