import styles from '/styles/header.module.scss';

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <input className={styles.input} placeholder="검색하기" />
    </div>
  );
}
