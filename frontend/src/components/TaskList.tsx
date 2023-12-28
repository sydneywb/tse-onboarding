// to git push : git push --set-upstream origin part-1
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
    // anonymous function with no name ()
    getAllTasks().then((result) => {
      if (result.success) {
        setTasks(result.data);
      } else {
        alert(result.error);
      }
    });
  }, []);

  // const taskList = tasks.map((task) => <li key={task._id}>{TaskItem({ task })}</li>);
  return (
    <div className={styles.outer}>
      <span className={styles.listTitle}>{title}</span>
      <div className={styles.listContainer}>
        {tasks.length === 0 ? (
          <p>No tasks yet. Add one above to get started.</p>
        ) : (
          <ul className={styles.listContainer}>
            {tasks.map((task) => (
              <li key={task._id}>
                <TaskItem task={task} key={task._id}></TaskItem>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
