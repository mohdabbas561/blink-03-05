import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useNavigate } from 'react-router-dom';

function Welcome(props) {
    const navigate = useNavigate();

  const handleLogout = () => {
    firebase.auth().signOut().then(() => {
        navigate('/');
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <p>Hello {props.location.state.mobileNumber}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Welcome;
