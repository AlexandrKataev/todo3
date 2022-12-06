import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './TaskCard.module.scss';

import { taskService } from 'shared/api/services/taskService';
import { ITask } from 'shared/models/ITask';
import { ItemIcon } from 'shared/ui/icons/ItemIcon';

const iconProps: React.SVGProps<SVGSVGElement> = {
  width: '100px',
  height: '100px',
  fill: 'var(--main-color)',
};

export const TaskCard: FC = () => {
  const { taskId } = useParams();

  const [taskData, setTaskData] = useState<ITask>({} as ITask);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetch = async () => {
      try {
        if (taskId) {
          const task = await taskService.getTask(taskId);
          task && setTaskData(task);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <ItemIcon {...iconProps} />
      <div className={styles.title}>{taskData.title}</div>
      <div className={styles.content}>{taskData.content}</div>
    </>
  );
};
