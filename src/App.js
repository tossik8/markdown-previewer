import { useSelector } from 'react-redux';
import './App.css';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

function App() {
   const isEditorOpen = useSelector(state=>state.editorReducer.isOpen);
   const isPreviewerOpen = useSelector(state=>state.previewerReducer.isOpen);
   if(!isEditorOpen && !isPreviewerOpen){
    return (
      <div className="App">
        <Editor/>
        <Previewer/>
      </div>
    );
   }
   else if(isEditorOpen){
    return (
      <div className="App">
        <Editor/>
      </div>
    );
   }
   else {
    return <div className="App">
      <Previewer/>
    </div>
   }
}

export default App;
