import React from "react";

export interface ITask {
  taskName: string;
  completed: boolean;
}

interface Props {
  task: ITask;
  deleteTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, deleteTask }: Props) => {
  return (
    <div>
      <input type="checkbox" name="" id="" />
      <span >{task.taskName}</span>
      <button
        onClick={() => {
          deleteTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};


export default TodoTask;
