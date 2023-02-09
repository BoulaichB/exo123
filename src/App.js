import {TodoList} from './components/todoList/todoList';

function App() {
  const tasks = ['Manger', 'Boire', 'Dormir', 'League of Legends'];
  return (
    <div>
      <TodoList _list={tasks}/>
    </div>
  );
}

export default App;
