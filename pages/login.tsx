import type { ReactElement } from 'react';
import Layout from '@src/components/layout/layout';
import type { NextPageWithLayout } from './_app';
import { NextSeo } from 'next-seo';
import styles from '/styles/login.module.scss';
import Link from 'next/link';

const Register: NextPageWithLayout = () => {
  return (
    <div>
      <NextSeo
        title="register"
        description="resgister description"
        canonical="https://colabo.ai"
        openGraph={{
          url: 'https://colabo.ai',
        }}
      />
      <div className={styles.background}>
        <video muted autoPlay loop>
          <source src="/mp4/login_background.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.container}>
        <p>음악의 새로운 패러다임</p>
        <div className={styles.input}>
          <div>
            <input className={styles.info} placeholder="이메일" />
          </div>
          <div>
            <input className={styles.info} type="password" placeholder="비밀번호" />
          </div>
          <div className={styles.login}>
            <button>로그인</button>
          </div>
          <div className={styles.toRegister}>
            <p>루프에이아이가 처음이세요?</p>
            <br />
            <Link href="/register">
              <button>회원가입</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Register;
