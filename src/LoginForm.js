import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    setEmailError('');
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    setPasswordError('');
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePasswordStrength = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
    } else if (!validatePasswordStrength(password)) {
      setPasswordError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.');
    } else {
      // Simulate authentication
      if (email === 'example@example.com' && password === 'password') {
        setLoginSuccess(true);
      } else {
        setLoginSuccess(false);
      }
    }
  };

  return (
    <div style={{ width: '400px', padding: '20px', backgroundColor: 'white', borderRadius: '10px' }}>
      <form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#6C4A4A', fontFamily: 'sans-serif' }}>Sign in </h2>
        <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{ color: 'black', marginRight: '10px', width: '80px' }}>Email:</label>
            <input type="text" placeholder="Enter your email" value={email} onChange={handleEmailChange} style={{ flex: 1, padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          {emailError && <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{emailError}</p>}
        </div>
        <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', fontSize: '20px' }}>
            <label style={{ color: 'black', marginRight: '10px', width: '80px' }}>Password:</label>
            <input type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} style={{ flex: 1, padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          {passwordError && <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{passwordError}</p>}
        </div>
        {loginSuccess && <p style={{ color: 'green', fontSize: '12px', marginTop: '5px' }}>Login successfully!</p>}
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#C89595', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign In</button>
        <div>{loginSuccess && <p style={{ color: 'green', fontSize: '12px', marginTop: '5px' }}>Login successfully!</p>}</div>
      </form>
    </div>
  );
};

export default LoginForm;
