import { useContext } from "react"
import TaskCard from "./TaskCard"
import { TaskContext } from "../context/TaskContext"

function TaskList() {

    const {tasks} = useContext(TaskContext);
    const {deleteTask} = useContext(TaskContext);

    if (tasks.length === 0) {
        return (
        <h1 className="text-white text-4xl font-bold text-center">no hay tareas aun</h1>
    )
    }
    return (
        <div className="grid grid-cols-4 gap-2">
            {tasks.map((task) => (
                <TaskCard eliminarTarea={deleteTask} task={task} key={task.id} />
            ))}
        </div>
    )
}

export default TaskList