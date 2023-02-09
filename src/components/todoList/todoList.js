import React from 'react'
import { useState } from 'react'

export const TodoList = ({_list}) => {
  // Liste de tâches : Créez un composant qui prend en entrée une liste de tâches et les affiche. Ajoutez un formulaire pour ajouter de nouvelles tâches à la liste. Utilisez les state pour gérer la liste de tâches.
  let tasks = [];
  _list.map(task => tasks.push(<div><span>{task}</span></div>));
  let [list, setList] = useState(tasks);

  const ajouterTache = () => {
    let newTask = document.getElementsByTagName('input')[0].value;
    _list.push(newTask);
    if(newTask.length != 0){
      tasks.push(<div key={tasks.length}><span>{newTask}</span></div>)
      list = <div>{tasks.map(task => task)}</div>;
      setList(list);
      console.log(tasks);
    }
  }
  return (
    <div>
      <div>
        <h1>Ajoutez une tâche</h1>
        <input type="text" placeholder="task" className='border-2 rounded bg-gray-100'/>
        <button className='bg-blue-400 px-2 py-0.5 rounded text-white font-bold' onClick={ajouterTache}>Ajoutez</button>
      </div>
      <div id='todo'>
        {list}
      </div>
    </div>
  )
}
