import React from 'react';

export function BrandPanel({ eyebrow, heading, highlight, body, stats }) {
  return (
    <div className="brand-side">
      <div className="shape shape-a" />
      <div className="shape shape-b" />
      <div className="shape shape-c" />

      <div className="brand-mark">
        <span className="dot" />
        Nimbus
      </div>

      <div className="brand-copy">
        <h2>{heading} <span>{highlight}</span></h2>
        <p>{body}</p>

        {stats && (
          <div className="brand-stats">
            {stats.map((s, i) => (
              <div key={i}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="brand-footnote">Protected by token-based authentication</div>
    </div>
  );
}

export default BrandPanel;
