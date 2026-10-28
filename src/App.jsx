import './App.css';
import InfoPerso from './InfoPerso';
import Competences from './Competences';
import Experiences from './Experiences';
function App(){
  return(
    <div className="cv">
      <InfoPerso></InfoPerso>
      <Competences></Competences>
      <Experiences></Experiences>
    </div>
  );
}

export default App;