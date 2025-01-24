import Footer from "./components/Footer"
import Header from "./components/Header"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

import styles from './App.module.css'

import { ITask } from "./interfaces/Task";
import { useState } from "react"
import Modal from "./components/Modal"

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);

  const deleteTask = (id:number) => {
    setTaskList(
      taskList.filter(task => { return task.id !== id;})
    )
  }



  return (
    <>
    <Modal children={<TaskForm btnText="Editar Tarefa" taskList={taskList}/>} />
      <Header />
      <main className={styles.main}>
      <div>
        <h2>O que você vai fazer?</h2>
        <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList}/>
      </div>
      <div>
        <h2>Suas tarefas:</h2>
        <TaskList taskList={taskList} handleDelete={deleteTask} />
      </div>
      </main>
      <Footer />
    </>
  )
}

export default App
