
import './App.css';
import Basic from './component/Basic';
import NoteState from './Context/NoteState';

function App() {
  return (
    <div className="App">
      <NoteState>
        <Basic></Basic>
      </NoteState>
    </div>
  );
}

export default App;
