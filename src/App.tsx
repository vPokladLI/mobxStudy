import Todolist from './components/Todolist/Todolist';
import Form from './components/Form/Form';
import ProgressBar from './components/ProgressBar';

function App() {
  return (
    <div className=" px-8 mx-auto  w-full max-w-5xl pt-16  xl:flex">
      <div className="xl:mr-11">
        <Form />
        <Todolist />
      </div>
      <ProgressBar />
    </div>
  );
}

export default App;
