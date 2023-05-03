import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseconfig from './firebaseconfig';
import "./Phone.css";
import { useNavigate } from 'react-router-dom';

function PhoneLogin() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // Add new state variable for error message
  const navigate = useNavigate();

  const handleSendCode = () => {
    const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
        setIsCodeSent(true);
      }).catch((error) => {
        console.log(error);
      });
  };

  const handleVerifyCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode);
    firebase.auth().signInWithCredential(credential)
      .then((result) => {
        const user = result.user;
        navigate('/all-products');
      }).catch((error) => {
        console.log(error);
        setErrorMessage('Incorrect OTP entered. Please try again.'); // Set error message
      });
  };

  return (
    <div className="container123">
      <div className="image-container">
        <img src="https://img.freepik.com/premium-vector/otp-authentication-secure-verification-never-share-otp-bank-details-concept_70921-2084.jpg" />
      </div>
      <div className="PhoneLogin">
      <h1 style={{marginBottom:"60px"}}>Verify With Phone Number</h1>
      {isCodeSent ? 
        <div>
          <label>Enter verification code:</label>
          <input className="textx1" type="text" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
          <div style={{ color: 'red' }}>{errorMessage}</div> {/* Display error message */}
          <button className="button2" onClick={handleVerifyCode}>Verify code</button>
        </div>
        :
        <div>
          <label style={{textAlign:"center"}} >Enter phone number:</label>
          <input className="textx1" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          <div id="recaptcha-container"></div>
          <button className="button1" onClick={handleSendCode}>Send verification code</button>
        </div>
      }
    </div>


    </div>
  );
}

firebase.initializeApp(firebaseconfig);

export default PhoneLogin;