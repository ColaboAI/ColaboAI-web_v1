import Link from 'next/link';
import styles from '/styles/sidebar.module.scss';

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>홈</a>
      </Link>
      <Link href="/search">
        <a>검색</a>
      </Link>
      <Link href="/favorites">
        <a>찜</a>
      </Link>
    </nav>
  );
}
