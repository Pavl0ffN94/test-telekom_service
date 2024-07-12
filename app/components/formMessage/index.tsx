'use client';

import React, {useState, ChangeEvent, FormEvent} from 'react';
import {FC} from 'react';
import {SmileOutlined, SendOutlined} from '@ant-design/icons';
import styles from './style.module.css';

import dayjs from 'dayjs';
import useMessageStore from '@/store';

export const FormMessage: FC = () => {
  const [message, setMessage] = useState('');
  const addMessage = useMessageStore(state => state.addMessage);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (message.trim()) {
      const userMessage = {
        message,
        timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        isMine: true,
      };

      addMessage(userMessage);

      const botMessage = {
        message: 'Hello world',
        timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        isMine: false,
      };

      setTimeout(() => addMessage(botMessage), 1000);

      setMessage('');
    }
  };

  return (
    <form className={styles.chatForm} onSubmit={handleSubmit}>
      <SmileOutlined className={styles.icon} />
      <input
        type='text'
        placeholder='Start typing...'
        value={message}
        onChange={handleChange}
        className={styles.input}
      />
      <button type='submit' className={styles.sendButton}>
        <SendOutlined />
      </button>
    </form>
  );
};
