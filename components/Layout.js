import styles from './layout.module.css';
import Head from 'next/head';
import utilsStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Shin code';

export const siteTitle = 'Next.js blog';

function Layout({ children,home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='favicon.ico'></link>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src='/images/profile.png'
              className={`${utilsStyles.borderCircle} ${styles.headerHomeImage}`}
            ></img>
            <h1>{name}</h1>
          </>
        ) : (
          <>
            <img
              src='/images/profile.png'
              className={`${utilsStyles.borderCircle}`}
            ></img>
            <h1>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">←ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
