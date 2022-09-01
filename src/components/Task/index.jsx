import styles from './task.module.css';
import { Trash, CheckCircle, Circle } from 'phosphor-react';
import { useState } from 'react';

export function Task({ content, onDeleteTask }) {
   const [checked, setChecked] = useState(false);

   function handleDeleteTask() {
      onDeleteTask(content);
   }

   function handleCheckboxChange() {
      setChecked(!checked);
      console.log(checked);
   }

   const completedTask = checked === true;

   return (
      <div className={styles.task}>
         <div className={styles.taskTitle}>
            <div
               className={styles.boxCheckTask}
               checked={checked}
               onClick={handleCheckboxChange}
            >
               <input
                  type='checkbox'
                  value={checked}
                  name='checkTask'
                  id='checkTask'
                  onChange={handleCheckboxChange}
                  checked={checked}
               />
               {checked !== false ? (
                  <CheckCircle size={19} />
               ) : (
                  <Circle size={19} color='#4ea8de' />
               )}
            </div>
            <p>{content}</p>
         </div>

         <button title='Deletar Task'>
            <Trash size={20} weight='light' onClick={handleDeleteTask} />
         </button>
      </div>
   );
}
