import React from 'react';
import { connect } from 'react-redux';
import { userLogout }  from 'react-admin';
import  MenuItem from '@material-ui/core/MenuItem';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';

import { GoogleLogout  } from "react-google-login";

function logoutBotton() {
  const site = localStorage.getItem('site');
  switch (site) {
    case 'Google':
      return (
        <GoogleLogout
          buttonText="Logout"
          onLogoutSuccess="Logout success"
          icon={<ExitIcon/>}
        >
        </GoogleLogout>
      )
    case 'Facebook':
      return (
        <div>
          <ExitIcon/> Logout
        </div>
      )
    default:
      break;
  }
}

const LogoutButton = ({ userLogout }) => (
            <MenuItem onClick={userLogout}>
                {logoutBotton()}
            </MenuItem>
);

export default connect(undefined, { userLogout })(LogoutButton);
