import styles from '/styles/proto.module.scss';
import { useProto } from '@src/hooks/useProto';
import CongratulationLottie from '@src/utils/lotties/congratulationLottie';

const Proto = () => {
  const [email, emailMessage, isEmail, onChangeEmail, mutation] = useProto();

  return (
    <div>
      <div className={styles.container}>
        <p>
          <span style={{ color: '#00ffff' }}>루프에이아이 </span>
          출시 기념
          <br />
          3달 무료 이용권 증정 이벤트
        </p>
        <div className={styles.subtitle}>
          <p>
            <span style={{ color: '#ffffff' }}>이벤트 기간</span>
            <br />
            2022. 11.01 ~ 2022. 12.31
          </p>
          <div />
        </div>
        <CongratulationLottie />
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
          <div className={styles.register}>
            <button disabled={!isEmail} onClick={() => mutation.mutate({ email })}>
              사전 등록하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proto;
