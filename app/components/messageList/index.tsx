'use client';

import React, {useLayoutEffect, useEffect, useRef} from 'react';
import {motion} from 'framer-motion';

import {MessageBox} from '../messageBox';
import styles from './style.module.css';
import useMessageStore from '@/store';

export const MessageList: React.FC = () => {
  const messages = useMessageStore(state => state.messages);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({behavior: 'smooth'});
    }
  };

  useLayoutEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={styles.messageList}>
      {messages.map((msg, index) => (
        <motion.div
          key={index}
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}>
          <MessageBox
            message={msg.message}
            timestamp={msg.timestamp}
            isMine={msg.isMine}
          />
        </motion.div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};
