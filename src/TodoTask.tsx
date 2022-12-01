import { Console } from "console";
import React, { ChangeEvent, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from "@fortawesome/free-solid-svg-icons"


export interface ITask {
  taskName: string;

}

interface Props {
  task: ITask;
  deleteTask(taskNameToDelete: string): void;

}


const TodoTask = ({ task, deleteTask }: Props) => {
    const [completed, setCompleted] = useState<boolean>(false);
  return (
    <div className="flex justify-around mt-3.5 " >
      <input type="checkbox" name="" id="" onChange={()=>setCompleted(true)}/>
      <span className={completed === true ? 'line-through' : ''} >{task.taskName}</span>
      <button className="bg-rose-500 rounded-full w-5 h-5 font-black text-white text-xs"
        onClick={() => {
          deleteTask(task.taskName);
        }}
      >
      <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};


export default TodoTask;
