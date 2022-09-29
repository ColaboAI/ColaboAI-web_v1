import type { ReactElement } from 'react';
import Layout from '@src/components/layout/layout';
import type { NextPageWithLayout } from './_app';
import { NextSeo } from 'next-seo';
import styles from '/styles/register.module.scss';
import { useRegister } from 'src/hooks/useRegister';

const Register: NextPageWithLayout = () => {
  const [
    email,
    password,
    confirmPassword,
    emailMessage,
    passwordMessage,
    confirmPasswordMessage,
    isEmail,
    isPassword,
    isConfirmPassword,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,
    mutation,
  ] = useRegister();

  return (
    <div>
      <NextSeo
        title="register"
        description="register description"
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
          <div className={styles.formBox}>
            <input
              name={'email'}
              className={styles.info}
              value={email}
              onChange={(e) => onChangeEmail(e)}
              placeholder="이메일"
            />
            {email.length > 0 && isEmail ? null : <p>{emailMessage}</p>}
          </div>
          <div className={styles.formBox}>
            <input
              name={'password'}
              type="password"
              className={styles.info}
              value={password}
              onChange={(e) => onChangePassword(e)}
              placeholder="비밀번호"
            />
            {password.length > 0 && isPassword ? null : <p>{passwordMessage}</p>}
          </div>
          <div className={styles.formBox}>
            <input
              name={'confirmPassword'}
              type="password"
              className={styles.info}
              value={confirmPassword}
              onChange={(e) => onChangeConfirmPassword(e)}
              placeholder="비밀번호 확인"
            />
            {confirmPassword.length > 0 && isConfirmPassword ? null : <p>{confirmPasswordMessage}</p>}
          </div>
          <div className={styles.register}>
            <button
              disabled={!(isEmail && isPassword && isConfirmPassword)}
              onClick={() => mutation.mutate({ email, password })}>
              회원가입
            </button>
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
