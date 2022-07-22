import styles from '/styles/header.module.scss';
import Link from 'next/link';

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <input className={styles.input} placeholder="검색하기" />
    </div>
  );
}
