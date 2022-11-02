import styles from '/styles/header.module.scss';
import { useRecoilState } from 'recoil';
import { searchWordState } from '@src/store/atom';
import { ChangeEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLogout } from '@src/hooks/useLogout';
import { Mobile, DesktopOrTablet } from '@src/hooks/useMediaQuery';

export default function Header() {
  const [searchWord, setSearchWord] = useRecoilState(searchWordState);
  const [token, setToken] = useState<string | null>('');
  const [logout] = useLogout();
  const router = useRouter();

  useEffect(() => {
    const item = localStorage.getItem('token');
    if (item !== null) {
      setToken(item);
    }
  }, [router]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  return (
    <>
      <DesktopOrTablet>
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
      </DesktopOrTablet>
      <Mobile>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <Link href="/">
              <a>루프에이아이</a>
            </Link>
          </div>
        </div>
      </Mobile>
    </>
  );
}
