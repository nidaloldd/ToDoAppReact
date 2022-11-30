import React, { FC, ChangeEvent, useState } from "react";

import TodoTask from "./TodoTask";
import { ITask } from "./TodoTask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setTask(event.target.value);
  };

  const addTask = (): void => {
    const newTask = { taskName: task,completed:completed };
    if(newTask.taskName!=""){
      setTodoList([...todoList, newTask]);
      setTask("");
    }
  };

  const deleteTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div className="background-color: rgb(0 0 0)">

      <button className="bg-indigo-500;">
        Save changes
      </button>
        <h1 className="text-3xl font-bold underline text-red-500">
          Hello world!
        </h1>

        <div>
        {todoList.map((task: ITask, key: number) => {
            return <TodoTask key={key} task={task} deleteTask={deleteTask} />;
          })}
        </div>

        <div>
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <button onClick={addTask}>Add Task</button>
         
        </div>
    </div>
  );
};

export default App;
