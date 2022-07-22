import styles from '/styles/layout.module.scss';
import React from 'react';
import Header from '@src/components/header';
import Sidebar from '@src/components/sidebar';

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
      </div>
    </>
  );
}
