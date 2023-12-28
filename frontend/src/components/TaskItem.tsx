// import React from "react";
import { updateTask, type Task } from "src/api/tasks";
import { CheckButton } from "src/components";
import styles from "src/components/TaskItem.module.css";
import React, { useState } from "react"; // update this line

export interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task: initialTask }: TaskItemProps) {
  const [task, setTask] = useState<Task>(initialTask);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleToggleCheck = () => {
    setLoading(true);
    updateTask({ ...task, isChecked: !task.isChecked }).then((result) => {
      if (result.success) {
        setTask(result.data);
      } else {
        alert(result.error);
      }
      setLoading(false);
    });
  };

  let inputClass = styles.textContainer;
  if (task.isChecked) {
    inputClass += ` ${styles.checked}`;
  }
  return (
    <div className={styles.item}>
      {
        <CheckButton
          checked={task.isChecked}
          onPress={handleToggleCheck}
          disabled={isLoading ? true : false}
        />
      }
      <div className={inputClass}>
        <span className={styles.title}>{task.title}</span>
        {task.description && <span className={styles.description}>{task.description}</span>}
      </div>
    </div>
  );
}
