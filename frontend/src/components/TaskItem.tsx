import React from "react";
import type { Task } from "src/api/tasks";
import { CheckButton } from "src/components";
import styles from "src/components/TaskItem.module.css";
// import React, { useState } from "react"; // update this line

export interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  // const [task, setTask] = useState<Task>(initialTask);
  // const [isLoading, setLoading] = useState<boolean>(false);

  let inputClass = styles.textContainer;
  if (task.isChecked) {
    inputClass += ` ${styles.checked}`;
  }
  return (
    <div className={styles.item}>
      {<CheckButton checked={task.isChecked} />}
      <div className={inputClass}>
        <span className={styles.title}>{task.title}</span>
        {task.description && <span className={styles.description}>{task.description}</span>}
      </div>
    </div>
  );
}
