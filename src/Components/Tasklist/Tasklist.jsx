import Message from "../Message/Message";
import Checkbox from "../Checkbox/Checkbox";
import style from "./Tasklist.module.css"
import { useState } from "react";


const Tasklist = ({ tasks, toglleTask, cleanTasks, }) => {

  const [search, setSearch] = useState("");

  return (
    <div >
        <div className={style.divS}>
        <div className={style.divSearch}>
            <input className={style.inputSearch}
            placeholder="search task.."
            onChange={(e) => setSearch(e.target.value)}
           />
           <svg  viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        </div>
        </div>
       
         {tasks.length === 0 && search === '' ? (
          <Message text="there is no task to show"/>
        ) : tasks.filter((task)=> {
         return search.toLowerCase() === '' ? task : task.descrip.toLowerCase().includes(search)
        }).map((task) => (
          <div key={task.descrip} className={style.divli} >
           <Checkbox task={task} toglleTask={toglleTask} />
            <p className={style.p} style={{ textDecoration: task.state ? "line-through" : "none",
            opacity: task.state ? 1.2 : 1, 
            color: task.state ? "#ff7065" : "#000", 
        }} >
            {task.descrip}
            </p>
            <button className={style.button} onClick={ () =>cleanTasks(task) }><svg viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
          </div>
        ))
        }
    </div>
  );
};

export default Tasklist;
