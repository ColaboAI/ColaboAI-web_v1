import styles from '/styles/header.module.scss';
import { useRecoilState } from 'recoil';
import { searchWordState } from '@src/store/atom';
import { ChangeEvent } from 'react';
import Link from 'next/link';

export default function Header() {
  const [searchWord, setSearchWord] = useRecoilState(searchWordState);
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <Link href="/">
          <a>ColaboAI</a>
        </Link>
      </div>
      <div className={styles.header}>
        <div className={styles.input}>
          <input className={styles.search} onChange={handleInput} value={searchWord} placeholder="검색하기" />
        </div>
        <div>
          <button className={styles.button}>로그인</button>
          <button className={styles.button}>회원가입</button>
        </div>
      </div>
    </div>
  );
}
