import { useState, useContext } from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskForm() {

    const {createTask} = useContext(TaskContext);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        createTask(title, description);
        setTitle('');
        setDescription('');
    }

    return (
        <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
           <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
           <input
                placeholder='Escribe tu tarea'
                onChange={(event) => setTitle(event.target.value)}
                className='bg-slate-300 p-3 w-full mb-2'
                value={title} autoFocus
            />
            <textarea 
                placeholder='Escribe la descripcion de la tarea'
                onChange={(event)=> setDescription(event.target.value)}
                value={description}   
                className='bg-slate-300 p-3 w-full mb-2'
            ></textarea>
            <button className='bg-indigo-500 px-3 py-1 text-white'>
                Guardar
            </button>
        </form>
        </div>
    )
}

export default TaskForm