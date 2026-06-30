import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

export default function Dashboard() {
  const navigate = useNavigate();
  const name = localStorage.getItem('name') || 'User';
  const initial = name.trim().charAt(0).toUpperCase() || 'U';
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    navigate('/login');
  };

  const hour = time.getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="dash-shell">
      <aside className="dash-sidebar">
        <div className="dash-brand">
          <span className="dot" />
          Nimbus
        </div>

        <div className="dash-user">
          <div className="avatar">{initial}</div>
          <div className="name">{name}</div>
          <div className="role">Authenticated member</div>
        </div>

        <button className="btn-ghost" onClick={logout}>Sign out</button>
      </aside>

      <main className="dash-main">
        <div className="dash-hero">
          <h1>{greeting}, {name.split(' ')[0]}.</h1>
          <p>Your session is verified and your token is active. Here's a quick snapshot of where things stand.</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon violet">🔒</div>
            <div className="stat-label">Session status</div>
            <div className="stat-value">Active</div>
            <span className="badge">Token verified</span>
          </div>

          <div className="stat-card">
            <div className="stat-icon cyan">🕒</div>
            <div className="stat-label">Current time</div>
            <div className="stat-value" style={{ fontSize: '19px', letterSpacing: '0.5px' }}>
              {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </div>
            <span className="badge" style={{ background: 'rgba(212,165,72,0.14)', color: '#9a7420', borderColor: 'rgba(212,165,72,0.3)' }}>
              Live
            </span>
          </div>

          <div className="stat-card">
            <div className="stat-icon pink">👋</div>
            <div className="stat-label">Signed in as</div>
            <div className="stat-value" style={{ fontSize: '17px' }}>{name}</div>
            <span className="badge" style={{ background: 'rgba(239,99,81,0.1)', color: '#c0452f', borderColor: 'rgba(239,99,81,0.25)' }}>
              Member
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
