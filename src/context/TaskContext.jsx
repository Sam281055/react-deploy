import {createContext, useEffect, useState} from 'react'
import { tasks as data } from '../Data/tasks';

export const TaskContext = createContext();

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([]);
    useEffect(() => { setTasks(data) }, []);

    
    function createTask(taskTitle, descripcion){
    setTasks([...tasks, 
      {
        title:taskTitle, 
        id: tasks.length, 
        description: descripcion}
      ])
  }

  function deleteTask(id){
    setTasks(tasks.filter((task)=>task.id !== id));
  }

  return (
    <TaskContext.Provider 
    value={{
        tasks,
        deleteTask,
        createTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}