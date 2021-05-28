import React from 'react';
import { Header } from '../Header/Header';
import {Footer} from '../Footer/Footer';
export const Layout = (props) => {
  const { children } = props;
  return (
    <>
    <div className='page-content'>
      <Header />
      <main>{children}</main>
      <Footer/>
      </div>
    </>
  );
};
