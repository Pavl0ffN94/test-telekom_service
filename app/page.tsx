import styles from './page.module.css';
import {FormMessage, Header, MessageBox} from './components';

const messages = [
  {message: 'I am down for whatever!', timestamp: '2024-07-10T11:36:00', isMine: true},
  {message: 'Sounds good to me!', timestamp: '2024-07-10T11:37:00', isMine: false},
  {
    message: 'Sounds good to me! asfasf asf sfasfasfasfwqfzfsadfqafasfwqfaf',
    timestamp: '2024-07-10T11:37:00',
    isMine: false,
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header />

        {messages.map((msg, index) => (
          <MessageBox key={index} {...msg} />
        ))}
        <FormMessage />
      </div>
    </main>
  );
}
