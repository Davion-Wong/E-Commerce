import React from 'react';
import './PasswordRecovery.css';

function PasswordRecovery() {
  return (
    <div className="password-recovery">
      <h2>Password Recovery</h2>
      <form className="recovery-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit">Send Recovery Email</button>
      </form>
    </div>
  );
}

export default PasswordRecovery;
