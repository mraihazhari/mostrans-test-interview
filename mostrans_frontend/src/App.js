import './App.css';
import './index.css';
import ListCharacters from './listCharacters';
import { BrowserRouter as Router,Routes, Route, Navigate} from 'react-router-dom';

function App() {
  
  return (
      <Router>
        <Routes>
          <Route exact path="/list_characters" element={<ListCharacters />} />
          <Route
            path="*"
            element = {<Navigate to="/list_characters" />}
          />
        </Routes>
      </Router>
  );

}

export default App;
