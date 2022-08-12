import styles from '/styles/header.module.scss';
import { useRecoilState } from 'recoil';
import { searchWordState } from '@src/store/atom';
import { ChangeEvent } from 'react';

export default function Header() {
  const [searchWord, setSearchWord] = useRecoilState(searchWordState);
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  return (
    <div className={styles.headerContainer}>
      <input className={styles.input} onChange={handleInput} value={searchWord} placeholder="검색하기" />
    </div>
  );
}
