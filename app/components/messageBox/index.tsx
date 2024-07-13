'use client';

import React, { useState } from 'react';
import { EditOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons';
import useMessageStore from '@/store';
import styles from './style.module.css';
import dayjs from 'dayjs';
import Image from 'next/image';
import avatarBot from '@/assets/image/avatarBot.png';
import dobleCheck from '@/assets/image/dobleCheck.svg';

interface IMessageBox {
  message: string;
  image?: string;
  timestamp: string;
  isMine: boolean;
}

export const MessageBox: React.FC<IMessageBox> = ({ message, image, timestamp, isMine }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState(message);
  const editMessage = useMessageStore((state) => state.editMessage);
  const deleteMessage = useMessageStore((state) => state.deleteMessage);

  const handleEdit = () => {
    if (isEditing && isMine) {
      editMessage(timestamp, editedMessage);
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    deleteMessage(timestamp);
  };

  const formattedTime = dayjs(timestamp).format('h:mm A');

  return (
    <div className={`${styles.message} ${isMine ? styles.mine : styles.their}`}>
      {!isMine && (
        <div className={styles.avatar}>
          <Image src={avatarBot} alt='avatar bot' width={32} height={32} />
        </div>
      )}
      <div className={`${styles.text} ${isMine ? styles.mineText : styles.theirText}`}>
        <div className={`${isMine ? styles.triangleRight : styles.triangleLeft}`}></div>
        {isEditing ? (
          <input
            type='text'
            value={editedMessage}
            onChange={(e) => setEditedMessage(e.target.value)}
            className={styles.editInput}
          />
        ) : (
          <>
            <div className={styles.botInfo}>
              <span className={styles.botName}>Jav</span>
              <span className={styles.botPos}>Engineering</span>
            </div>
            <div className={styles.messageContent}>
              {message}
              {image && <img src={image} alt="uploaded" className={styles.messageImage} />}
            </div>
          </>
        )}
        <div className={styles.messageInfo}>
          <div className={styles.timestamp}>
            {formattedTime}
            <div className={styles.checkMsg}>
              <Image width={16} height={8} src={dobleCheck} alt='dobleCheck' />
            </div>
          </div>
          {isMine && (
            <div className={styles.actions}>
              <EditOutlined className={styles.icon} onClick={handleEdit} />
              <DeleteOutlined className={styles.icon} onClick={handleDelete} />
              {isEditing && <CheckOutlined className={styles.icon} onClick={handleEdit} />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
