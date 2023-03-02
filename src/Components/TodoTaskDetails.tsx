import { Task } from "./Interface";

interface Details {
    task: Task;
    completeTask(taslNameList : string): void;
} 

const TodoTaskDetails = ({task,completeTask} : Details) =>{
    return(
    <>
    <div className="task">
        <div className="content">
            <span>{task.taskName}</span>
            <span>{task.deadLine}</span>
        </div>
        <button type="button" onClick={()=>{
            completeTask(task.taskName)
        }}>Delete</button>
    </div>

    </>
)}

export default TodoTaskDetails