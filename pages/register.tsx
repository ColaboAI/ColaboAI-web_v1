import type { ReactElement } from 'react';
import Layout from '@src/components/layout/layout';
import type { NextPageWithLayout } from './_app';
import { NextSeo } from 'next-seo';
import styles from '/styles/register.module.scss';
import { useRegister } from 'src/hooks/useRegister';
// TODO: Register 컴포넌트에서 이메일 중복 체크를 하는 기능을 추가해야함.

const Register: NextPageWithLayout = () => {
  const [{ email, password }, onChangeForm, mutation] = useRegister();
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
          <source src="/mp4/register_background.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.container}>
        <p>음악의 새로운 패러다임</p>
        <div className={styles.input}>
          <div>
            <input
              name={'email'}
              className={styles.info}
              value={email}
              onChange={(e) => onChangeForm(e)}
              placeholder="아이디"
            />
          </div>
          <div>
            <input
              name={'password'}
              className={styles.info}
              value={password}
              onChange={(e) => onChangeForm(e)}
              placeholder="패스워드"
            />
          </div>
          <div className={styles.login}>
            <button onClick={() => mutation.mutate({ email, password })}>회원가입</button>
          </div>
          <div className={styles.social}>
            <button>구글</button>
          </div>
          <div className={styles.social}>
            <button>페이스북</button>
          </div>
          <div className={styles.social}>
            <button>카카오톡</button>
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
