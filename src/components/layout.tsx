import React from 'react';
import styles from '/styles/layout.module.scss';
import Header from '@src/components/header';
import Sidebar from '@src/components/sidebar';
import Footer from '@src/components/footer/footer';

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: AppLayoutProps) {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <Sidebar />
          <div className={styles.pageContainer}>{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
}
