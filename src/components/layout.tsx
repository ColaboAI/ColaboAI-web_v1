import Head from 'next/head';
import styles from '/styles/layout.module.scss';
import React from 'react';

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: AppLayoutProps) {
  return (
    <>
      <Head>
        <title>ColaboAI Layout</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
}
