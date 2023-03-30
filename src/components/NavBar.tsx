import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
      }}
    >
      <ul>
        <li style={{ display: 'inline', padding: 5 }}>
          <Link to="/">Home LP</Link>
        </li>
        <li
          style={{
            display: 'inline',
            padding: 5,
            borderLeft: '1px solid black',
          }}
        >
          <Link to="/about">About</Link>
        </li>
        <li
          style={{
            display: 'inline',
            padding: 5,
            borderLeft: '1px solid black',
          }}
        >
          {/* using default 'a' to jump to another app route */}
          <a href="/admin">Admin</a>
        </li>
      </ul>
    </nav>
  );
}
