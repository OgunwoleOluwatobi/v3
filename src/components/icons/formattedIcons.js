import React from 'react';
import PropTypes from 'prop-types';
import {
  Twitter,
  Github,
  Linkedin,
  Dribble,
  Instagram,
  External,
  Home
} from '../icons';

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <Github />;
    case 'Instagram':
      return <Instagram />;
    case 'Linkedin':
      return <Linkedin />;
    case 'Twitter':
      return <Twitter />;
    case 'Dribble':
      return <Dribble />;
    case 'External':
      return <External />;
    case 'Home':
      return <Home />;
    default:
        return <Dribble />
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcon;