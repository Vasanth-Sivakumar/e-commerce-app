import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    alert('Registration successful!');
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 py-5">
          <div className="card">
            <div className="card-header">
              <h2>Register</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group py-1">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username" placeholder="Enter username"
                    value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div className="form-group py-1">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email"
                    value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="form-group py-1 pb-3">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password"
                    value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button type="submit" className="btn btn-outline-dark me-2">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
