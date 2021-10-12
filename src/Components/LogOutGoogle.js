import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '474125835817-kcrbvh7no78e4cqkaph24orhhm65jeg1.apps.googleusercontent.com';
function LogOutGoogle() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default LogOutGoogle;
