import React from 'react';
import TwitterLogo from '../images/Twitter_Icon.png';
import LinkedInLogo from '../images/Linkedin_Icon.png';
import InstagramLogo from '../images/Instagram_Icon.png';
import GithubLogo from '../images/GitHub_Icon.png';
import FacebookLogo from '../images/Facebook_Icon.png';

export default function Footer(){
  return (
    <div className='footer'>
      <img src={TwitterLogo} alt='Twitter Logo'/>
      <img src={FacebookLogo} alt='FB Logo'/>
      <img src={InstagramLogo} alt='Instagram Logo'/>
      <img src={LinkedInLogo} alt='LinkedIn Logo'/>
      <img src={GithubLogo} alt='Github Logo' />
    </div>
  )
}
