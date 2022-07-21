import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const About: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation('common');

  return (
    <div>
      <h1>{t('h1')}</h1>
      <h3>{t('description')}</h3>
      <ul>
        <li>
          {t('currentUrl')} : http://localhost:3000
          {router.locale !== 'ko' && '/' + router.locale}
          {router.pathname}
        </li>
        <li>locale: {router.locale}</li>
        <li>pathname: {router.pathname}</li>
      </ul>
    </div>
  );
};

export default About;
