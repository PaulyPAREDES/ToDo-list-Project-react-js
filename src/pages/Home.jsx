import { useState, useEffect} from "react";
import style from "./Home.module.css";
import Inputadd from "./../Components/Inputadd/Inputadd";
import Title from "./../Components/Title/Title";
import Tasklist from "../Components/Tasklist/Tasklist";

const Home = () => {
  const [taskItems, setTaskItems] = useState([]);

 
  const createNewTask = (taskDescrip) => {
    if (!taskItems.find((task) => task.descrip === taskDescrip)) {
      setTaskItems([...taskItems, { descrip: taskDescrip, state: false }]);
    }
  };

  const toglleTask = (task) =>{
    setTaskItems(taskItems.map(t => (t.descrip === task.descrip) ? {...t, state: !t.state}: t)
  )
}

  useEffect(() => {
   let data = localStorage.getItem("task")
   if(data){
    setTaskItems(JSON.parse(data))
   }
  }, [])

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(taskItems))
  }, [taskItems])

   const cleanTasks = (task) =>{
   const deleteTask=taskItems.filter(t => t.descrip !== task.descrip )
   setTaskItems(deleteTask);
   }

   const taskComplete = taskItems.filter(task => task.state).length;
   const numberTotal = taskItems.length;

  return (
    <div className={style.divHome}>
      <Title text="To do List" />
      <h4>{taskComplete}/{numberTotal} complete</h4>
      <Inputadd createNewTask={createNewTask} />
      <Tasklist tasks={taskItems} toglleTask={toglleTask} cleanTasks={cleanTasks} />
    </div>
  );
};

export default Home;
