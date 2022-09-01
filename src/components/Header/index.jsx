import styles from './header.module.css';
import Logo from '../../assets/Logo.svg';
import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';

export function Header() {

   // function handleCreateNewTask(event) {
   //    event.preventDefault();
   //    console.log('Creating new task');
   // }

   return (
      <div className={styles.container}>
         <header className={styles.header}>
            <img src={Logo} alt='Logo Todo-List' className={styles.logo} />
         </header>
         {/* <form
            onSubmit={handleCreateNewTask}
            className={styles.containerCreateTask}
         >
            <input
               type='text'
               name='task'
               id='task'
               placeholder='Adicione um nova tarefa'
            />
            <button type='submit'>
               <PlusCircle size={16} />
               Criar
            </button>
         </form> */}
      </div>
   );
}
