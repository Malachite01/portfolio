import React from 'react';
import mailI from '../../img/icons/mail.svg';
import githubI from '../../img/icons/github.svg';
import linkedInI from '../../img/icons/linkedin.svg';

const Socials = () => {
  const socialsList = [
    { url: "mailto:mathieu.antunes31@gmail.com", imageSrc: mailI},
    { url: "https://github.com/Malachite01", imageSrc: githubI},
    { url: "https://www.linkedin.com/in/antunesmathieu/", imageSrc: linkedInI},
  ];

  return (
    <div className="socials" transition-style="in:wipe:bottom">
      {socialsList.map((social, index) => ( 
        <a href={social.url} className="social" key={index} target="_blank" rel="noreferrer">
          <img src={social.imageSrc} alt={social.url}/>
        </a>
      ))}
    </div>
  );
}
 
export default Socials;