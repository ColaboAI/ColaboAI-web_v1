import type { ReactElement } from 'react';
import Layout from '@src/components/layout/layout';
import type { NextPageWithLayout } from './_app';
import { NextSeo } from 'next-seo';
import styles from '/styles/register.module.scss';
import { useRegister } from 'src/hooks/useRegister';
// TODO: Register 컴포넌트에서 이메일 중복 체크를 하는 기능을 추가해야함.

const Register: NextPageWithLayout = () => {
  const [{ email, password, confirmPassword }, onChangeForm, mutation] = useRegister();
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
        <p>
          지금 바로 회원가입하세요
          <br />
        </p>
        <div className={styles.input}>
          <div>
            <input
              name={'email'}
              className={styles.info}
              value={email}
              onChange={(e) => onChangeForm(e)}
              placeholder="이메일"
            />
          </div>
          <div>
            <input
              name={'password'}
              className={styles.info}
              value={password}
              onChange={(e) => onChangeForm(e)}
              placeholder="비밀번호"
            />
          </div>
          <div>
            <input
              name={'password-confirm'}
              className={styles.info}
              value={confirmPassword}
              onChange={(e) => onChangeForm(e)}
              placeholder="비밀번호 확인"
            />
          </div>
          <div className={styles.register}>
            <button onClick={() => mutation.mutate({ email, password })}>회원가입</button>
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
