import React, { useState } from 'react';
import { FC ,ChangeEvent} from 'react';
import { Task } from './Interface';
import TodoTaskDetails from './TodoTaskDetails';

const Todo: FC = () => {
  const [task,setTask] = useState<string>("")
  const [deadLine,setDeadLine] = useState<number>(0)
  const [todoList,SetTodoList] = useState<Task[]>([])

  const handleChange = (event :ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "task"){
      setTask(event.target.value)
    }else{
    setDeadLine(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = {taskName : task, deadLine: deadLine}
    SetTodoList([...todoList, newTask])
    //console.log('taskDetails',todoList)
    setTask("");
    setDeadLine(0);
  }

  const completeTask = (taskNameList:string):  void=>{
    SetTodoList(todoList.filter((task) => {
        return task.taskName != taskNameList
    }) )

  }
  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'>
          <input type='text' placeholder="Task..." value ={task} name ="task "onChange={handleChange}/>
          <input type='number' placeholder="Dead line in days" value = {deadLine} name = "deadLine "onChange={handleChange}/>
        </div>
        <button type='button' onClick={addTask}>Add your task</button>
      </div>
      <div className='todoList'></div>
      {todoList.map((task : Task, key:number) => {
        return < TodoTaskDetails key={key} task={task} completeTask={completeTask}/>
      })}
    </div>
  );
}

export default Todo;

