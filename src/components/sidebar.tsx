import Link from 'next/link';
import styles from '/styles/sidebar.module.scss';

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      {/*<input className={styles.input} placeholder="Search..." />*/}
      <Link href="/">
        <a>로고</a>
      </Link>
      <Link href="/">
        <a>홈</a>
      </Link>
      <Link href="/about">
        <a>검색</a>
      </Link>
      <Link href="/contact">
        <a>찜</a>
      </Link>
    </nav>
  );
}
