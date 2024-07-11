'use client';

import React, {useState} from 'react';
import {type FC} from 'react';
import {SmileOutlined, SendOutlined} from '@ant-design/icons';
import styles from './style.module.css';

export const FormMessage: FC = () => {
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Message sent:', message);
    setMessage('');
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
