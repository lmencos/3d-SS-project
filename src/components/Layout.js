import React from 'react';
import Navbar from '../containers/Navbar';

const Layout = (props) => {
  // const children = props.children
  return(
    <div>
      <Navbar />
      {props.children}
    </div>
  );
};
export default Layout;