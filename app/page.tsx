import Image from 'next/image';
import styles from './page.module.css';
import {Header} from './components';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header />
      </div>
    </main>
  );
}
