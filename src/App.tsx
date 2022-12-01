import { Console } from "console";
import React, { FC, ChangeEvent, useState } from "react";

import TodoTask from "./TodoTask";
import { ITask } from "./TodoTask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
 
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setTask(event.target.value);
  };


  
  const addTask = (): void => {
    const newTask = { taskName: task };
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
    <div className="bg-gradient-to-r from-fuchsia-200 to-purple-400 to-indigo-300 h-screen grid justify-items-center ">

        <div className="bg-white w-5/12  rounded-lg  my-14 ">
          <div >
              {todoList.map((task: ITask, key: number) => {
                  return <TodoTask key={key} task={task} deleteTask={deleteTask} />;
              })}
          </div>
          <div className="grid justify-items-center my-8 top-0">
            <input className="rounded-lg border-2 text-center "
              type="text"
              placeholder="Add new todo"
              name="task"
              value={task}
              onChange={handleChange}
            />
           
            <button className="bg-yellow-400 rounded-full w-10 h-10 text-xl font-black text-white" onClick={addTask}> + </button>
          </div>
      </div>
    </div>
  );
};

export default App;
