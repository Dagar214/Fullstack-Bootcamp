import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BrandPanel } from '../components/Scene';
import { registerUser } from '../api';
import '../index.css';

function EyeIcon({ open }) {
  return open ? (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  ) : (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  );
}

function getStrength(pwd) {
  if (!pwd) return 0;
  let score = 0;
  if (pwd.length >= 8) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  return score;
}

function StrengthMeter({ password }) {
  const score = getStrength(password);
  const labels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
  const cls = score <= 1 ? 'weak' : score <= 2 ? 'medium' : 'strong';
  if (!password) return null;
  return (
    <div className="strength-meter">
      <div className="strength-bars">
        {[1,2,3,4].map(i => (
          <div key={i} className={`strength-bar ${i <= score ? cls : ''}`} />
        ))}
      </div>
      <span className="strength-text">{labels[score] || ''}</span>
    </div>
  );
}

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); setSuccess('');
    if (!name || !email || !password) { setError('Every field below is required.'); return; }
    if (password.length < 6) { setError('Use at least 6 characters for your password.'); return; }
    setLoading(true);
    try {
      const data = await registerUser(name, email, password);
      if (data.token) {
        setSuccess('Account ready — taking you in…');
        localStorage.setItem('token', data.token);
        localStorage.setItem('name', data.name || name);
        setTimeout(() => navigate('/dashboard'), 1200);
      } else {
        setError(data.msg || 'Could not complete registration.');
      }
    } catch {
      setError('Could not reach the server. Is it running?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-shell">
      <BrandPanel
        heading="Three fields."
        highlight="One secure account."
        body="No clutter, no extra steps — just the essentials we need to spin up your profile and hand you a token."
        stats={[
          { value: '3 fields', label: 'To get started' },
          { value: '0 spam', label: 'Promised' },
        ]}
      />

      <div className="form-side">
        <div className="form-box">
          <div className="form-eyebrow">Get started</div>
          <h1 className="form-title">Create your account</h1>
          <p className="form-sub">It takes less than a minute.</p>

          {error && (
            <div className="alert alert-error">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              {error}
            </div>
          )}
          {success && (
            <div className="alert alert-success">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label>Full name</label>
              <div className="input-wrap">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
                <input
                  type="text" value={name} onChange={e => setName(e.target.value)}
                  placeholder="Jane Doe" autoComplete="name"
                />
              </div>
            </div>

            <div className="field">
              <label>Email</label>
              <div className="input-wrap">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <input
                  type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com" autoComplete="email"
                />
              </div>
            </div>

            <div className="field">
              <label>Password</label>
              <div className="input-wrap">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <input
                  type={showPass ? 'text' : 'password'} value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="At least 6 characters" autoComplete="new-password"
                />
                <button type="button" className="eye-btn" onClick={() => setShowPass(p => !p)} aria-label="Toggle password">
                  <EyeIcon open={showPass} />
                </button>
              </div>
              <StrengthMeter password={password} />
            </div>

            <button type="submit" className="btn-primary" disabled={loading}>
              {loading && <span className="spinner" />}
              {loading ? 'Creating account…' : 'Create account'}
            </button>
          </form>

          <div className="divider">already a member</div>

          <div className="switch-link">
            Have an account already? <Link to="/login">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
