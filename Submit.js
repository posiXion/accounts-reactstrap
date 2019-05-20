import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
library.add(faFacebook, faGoogle, faTwitter );

import './main.css';

function capitalize(s) {
  return s[0].toUpperCase() + s.substr(1);
}

const Submit = ({
  text, onClick, disabled, icon, className, social,
}) => {
  /* Social Button */
  if (social) {
    // const color =
    //   social === 'google'
    //     ? 'google plus' // semantic supports only "google plus" color string
    //     : social === 'github'
    //       ? 'grey' // no color string for github
    //       : social;

    // let color;
    // switch (social) {
    //   case 'google': color = '#dd4b39'; break;
    //   case 'facebook': color = '#3b5998'; break;
    //   case 'github': color = '#grey'; break;
    //   case 'twitter': color = '#55acee'; break;
    //   default: color = null;
    // }

    // console.log(color);

    return (
      <Button color={social} onClick={onClick} className={ ['social-btn', social].join(' ') }>
        <FontAwesomeIcon className="mr-1" icon={['fab', social]} /> Continue with {capitalize(social)}
      </Button>
    );
  }

  /* Regular Button */
  return (
    <Button
      content={text}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {text}
    </Button>
  );
};

Submit.defaultProps = {
  icon: '',
  className: '',
  social: '',
};

export default Submit;
