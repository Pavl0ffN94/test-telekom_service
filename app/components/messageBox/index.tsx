'use client'

import React, {type FC} from 'react';
import styles from './style.module.css';
import dayjs from 'dayjs';
import {  CheckOutlined } from '@ant-design/icons';

interface IMessageBox {
  message: string;
  timestamp: string;
  isMine: boolean;
}

export const MessageBox:FC<IMessageBox> = ({ message, timestamp, isMine }) => {
  const formattedTime = dayjs(timestamp).format('h:mm A');

  return (
     <div className={`${styles.message} ${isMine ? styles.mine : styles.their}`}>
      <div className={`${styles.text} ${isMine ? styles.mineText : styles.theirText}`}>
        <p className={styles.messageContent}>{message}</p>
        <span className={styles.timestamp}>{formattedTime}</span>
        {isMine && <CheckOutlined className={styles.icon} />}
      </div>
    </div>
  );
};

