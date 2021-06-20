import React from 'react';

const Layout: React.FC = ({ children }) => (
  <div className="layout">
    <div className="background" />
    {children}
  </div>
);

export default Layout;
