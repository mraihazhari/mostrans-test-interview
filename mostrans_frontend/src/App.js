import './App.css';
import './index.css';
import ListCharacters from './listCharacters';
import { BrowserRouter as Router,Routes, Route, Navigate} from 'react-router-dom';

function App() {
  
  return (
      <Router>
        <Routes>
          <Route path="*" element={<ListCharacters />} />
        </Routes>
      </Router>
  );

}

export default App;
