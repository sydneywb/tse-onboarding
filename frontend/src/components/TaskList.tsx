import React, { useEffect, useState } from "react";
import { getAllTasks, type Task } from "src/api/tasks";
import { TaskItem } from "src/components";
import styles from "src/components/TaskList.module.css";

export interface TaskListProps {
  title: string;
}

export function TaskList({ title }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getAllTasks().then((result) => {
      if (result.success) {
        setTasks(result.data);
      } else {
        alert(result.error);
      }
    });
  }, []);
  const taskList = tasks.map((task) => (
    <li key={task._id}>
      <p className={styles.title}>{task.title}</p>
      <p className={styles.description}>{task.description}</p>
    </li>
  ));
  return (
    <div className={styles.outer}>
      <span className={styles.listTitle}>{title}</span>
      <div className={styles.listContainer}>
        {tasks.length === 0 ? (
          <p>No tasks yet. Add one above to get started.</p>
        ) : (
          <ul>{taskList}</ul>
        )}
        ;
      </div>
    </div>
  );
}
