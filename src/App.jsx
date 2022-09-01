import { Header } from './components/Header';
import { TasksList } from './components/TasksList';
import { v4 as uuidv4 } from 'uuid';
import './app.css';
import { useState } from 'react';
import { Task } from './components/Task';

export function App() {
   return (
      <div>
         <Header />
         <main className='container'>
            <TasksList />
         </main>
      </div>
   );
}
