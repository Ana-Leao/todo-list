import { ClipboardText, PlusCircle } from 'phosphor-react';
import { Task } from '../Task';
import styles from './taskslist.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

export function TasksList() {
   const [tasks, setTask] = useState(['Primeira tarefa']);
   // const [tasks, setTask] = useState([
   //    {
   //       id: uuidv4(),
   //       content: 'tarefa 01',
   //    },
   //    {
   //       id: uuidv4(),
   //       content: 'tarefa 02',
   //    },
   // ]);

   // const [tasks, setTask] = useState([{
   //    id: 1,
   //    content: 'primeira tarefa',
   //    isCompleted: true,
   // }]);

   const [newTask, setNewTask] = useState('');

   // function handleCreateTask(event) {
   //    event.preventDefault();
   //    setTask([...tasks, { id: uuidv4(), newTask }]);
   //    console.log(tasks);
   // }
   const createdTasks = tasks.length;

   function handleCreateTask(event) {
      event.preventDefault();

      setTask([...tasks, newTask]);
      setNewTask('');

      //console.log(tasks);
   }

   function handleNewTask(event) {
      setNewTask(event.target.value);
      //console.log(newTask);
   }

   function deleteTask(taskToDelete) {
      const tasksWithoutDeletedOne = tasks.filter((task) => {
         return task !== taskToDelete;
         //return task.id !== taskToDelete;
      });
      setTask(tasksWithoutDeletedOne);
   }

   return (
      <div className={styles.container}>
         <form
            onSubmit={handleCreateTask}
            className={styles.containerCreateTask}
         >
            <input
               type='text'
               name='task'
               id='task'
               placeholder='Adicione um nova tarefa'
               value={newTask}
               onChange={handleNewTask}
            />
            <button type='submit'>
               <PlusCircle size={16} />
               Criar
            </button>
         </form>
         <header className={styles.headerTasksList}>
            <span className={styles.taskCreated}>
               <strong>Tarefas criadas</strong>
               <div className={styles.box}>
                  <span>{createdTasks}</span>
               </div>
            </span>

            <span className={styles.taskCompleted}>
               <strong>Concluídas</strong>
               <div className={styles.box}>
                  <span>0 de {createdTasks}</span>
               </div>
            </span>
         </header>

         {tasks.length !== 0 ? (
            tasks.map((task) => {
               return (
                  <Task key={task} content={task} onDeleteTask={deleteTask} />
               );
            })
         ) : (
            <div className={styles.emptyTasksList}>
               <ClipboardText size={56} weight='light' />
               <strong>Você ainda não tem tarefas cadastradas</strong>
               <strong>Crie tarefas e organize seus itens a fazer</strong>
            </div>
         )}
      </div>
   );
}
