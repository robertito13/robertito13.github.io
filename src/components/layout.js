import React from 'react';

const Layout = ({ location, title, children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default Layout;
