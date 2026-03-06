import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authServices from '../../services/authServices';
import "./auth.css"

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.username) { setError("Please enter your username !!"); return; }
    if (!formData.password) { setError("Please enter your password !!"); return; }

    setLoading(true);
    try {
      await authServices.login(formData);
      setTimeout(() => navigate("/playLocaly"), 1500);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="authContainer">

        <div className="info">
          <h2 className="title">Welcome Back</h2>
          <p>Sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              disabled={loading}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          {error && <div className="errorMsg">{error}</div>}

          <button type="submit" className="submitBtn" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

      </div>
    </div>
  );
}

export default Login;