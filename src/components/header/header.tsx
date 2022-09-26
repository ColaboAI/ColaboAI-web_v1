import styles from '/styles/header.module.scss';
import { useRecoilState } from 'recoil';
import { searchWordState } from '@src/store/atom';
import { ChangeEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLogout } from '@src/hooks/useLogout';

export default function Header() {
  const [searchWord, setSearchWord] = useRecoilState(searchWordState);
  const [token, setToken] = useState<string | null>('');
  // const token = getToken();
  const [logout] = useLogout();
  const router = useRouter();

  useEffect(() => {
    const item = localStorage.getItem('token');
    console.log(item);
    if (item !== null) {
      setToken(item);
    }
    console.log('token', token);
  }, [router]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <Link href="/">
          <a>루프에이아이</a>
        </Link>
      </div>
      <div className={styles.header}>
        <div className={styles.input}>
          <input className={styles.search} onChange={handleInput} value={searchWord} placeholder="검색하기" />
        </div>
        <div>
          {token == '' ? (
            <button className={styles.button} onClick={() => router.push('/login')}>
              로그인 / 회원가입
            </button>
          ) : (
            <button className={styles.button} onClick={() => logout()}>
              로그아웃
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
