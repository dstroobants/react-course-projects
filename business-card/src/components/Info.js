import React from 'react';
import Denis from '../images/denis.jpg';
import EmailLogo from '../images/email_Icon.png';

export default function Info(){
  return (
    <div className='info'>
      <img src={Denis} alt='Denis' />
      <h1>Denis Stroobants</h1>
      <h3>Wannabe Developer</h3>
      <p>https://github.com/dstroobants</p>
      <button type='button'><img src={EmailLogo} alt='Email Logo'/>Email</button>
    </div>
  )
}
