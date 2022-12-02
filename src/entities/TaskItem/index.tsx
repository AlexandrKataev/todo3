import React from 'react';
import s from './TaskItem.module.scss';
import { ReactComponent as ItemIcon } from 'shared/ui/icons/item.svg';

interface TaskItemProps {
  title: string;
}

export const TaskItem: React.FC<TaskItemProps> = ({ title }) => {
  return (
    <div className={s.container}>
      <ItemIcon className={s.icon} />
      <div className={s.title}>{title}</div>
    </div>
  );
};
