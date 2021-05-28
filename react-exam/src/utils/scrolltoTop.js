import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useLocation } from 'react-router';

const ScrolltoTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
export default withRouter(ScrolltoTop)