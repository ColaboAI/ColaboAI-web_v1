import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

export const Desktop = ({ children }: { children: JSX.Element }): JSX.Element | null => {
  const [isDesktop, setIsDesktop] = useState(false);
  const desktop = useMediaQuery({ minWidth: 1024 });
  useEffect(() => {
    setIsDesktop(desktop);
  }, [desktop]);
  return isDesktop ? children : null;
};

export const Tablet = ({ children }: { children: JSX.Element }): JSX.Element | null => {
  const [isTablet, setIsTablet] = useState(false);
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  useEffect(() => {
    setIsTablet(tablet);
  }, [tablet]);
  return isTablet ? children : null;
};

export const Mobile = ({ children }: { children: JSX.Element }): JSX.Element | null => {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({ maxWidth: 767 });
  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);
  return isMobile ? children : null;
};

export const DesktopOrTablet = ({ children }: { children: JSX.Element }): JSX.Element | null => {
  const [isDesktopOrTablet, setIsDesktopOrTablet] = useState(false);
  const desktopOrTablet = useMediaQuery({ minWidth: 768 });
  useEffect(() => {
    setIsDesktopOrTablet(desktopOrTablet);
  }, [desktopOrTablet]);
  return isDesktopOrTablet ? children : null;
};
