import React, {type FC} from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import AvatarGroup from '@/assets/image/avatar-group.png';
import OptionIcon from '@/assets/image/optionIcon.png';

export const Header: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icons}>
        <Image src={AvatarGroup} alt='avatar group' />
      </div>
      <div className={styles.groupName}>
        <span>🦄 Team Unicorns</span>
        <span>last seen 45 minutes ago</span>
      </div>
      <div className={styles.options}>
        <Image src={OptionIcon} alt='option' />
      </div>
    </div>
  );
};
