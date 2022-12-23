import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const Layout = (props: any) => {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
