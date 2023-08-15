import React, {useState} from 'react';
import './Login.css';
import { users } from '../../ProductsDB';

function Login() {

  const [emailAddress, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.email === emailAddress && user.password === password
    );
    if (user) {
      console.log("You are logged in!");
    } else {
      setError('Invalid email address or password');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <input type="checkbox" id="remember" name="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <button type="submit">Login</button>
        <p><a href="/password-recovery">Forgot Password?</a></p>
      </form>
    </div>
  );
}

export default Login;