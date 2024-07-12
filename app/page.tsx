import styles from './page.module.css';
import {FormMessage, Header, MessageBox, MessageList} from './components';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header />
        <div className={styles.messageContainer}>
          <MessageList />
        </div>
        <FormMessage />
      </div>
    </main>
  );
}
