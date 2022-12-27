import './App.css';
import Slidebar from './components/Slidebar';
import Chat from './components/Chat';

function App() {
  return (
    <div className='app' >
    <div className='app__body'>
      <Slidebar />
      <Chat />
    </div>
  </div>
  );
}

export default App;
