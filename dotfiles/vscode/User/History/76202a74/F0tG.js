import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { ENV } from 'common/const';

const PageTracking = ({ children }) => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (ENV.IS_TRACKING) {
      ReactGA.initialize('G-BCR3WVSHR2');
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.send('pageview');
    }
  }, [initialized, location]);

  return children;
};

export default PageTracking;
