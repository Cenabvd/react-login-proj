import React from 'react'

function LoginInputs() {
  return (
    <section className='inputs space-y-5 mt-12'>
        <div>
            <input type="text" placeholder='enter your email'  className='w-2/3 px-5 py-3 focus:outline-none rounded-full placeholder-[#d7c4fc]'/>
        </div>
        <div>
            <input type="text"  placeholder='enter your password' className='w-2/3 px-5 py-3 focus:outline-none rounded-full placeholder-[#d7c4fc]'/>
        </div>
    </section>
  )
}

export default LoginInputs
