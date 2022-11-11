import './App.css';
import Button1 from './components/button1'
import Counter from './components/counter';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manageClick = () => {
    setNumClics(numClics + 1);
  }
  const restartCounter = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freecodecamp' />
      </div>
      <div className='first-container'>
        <Counter numClics={numClics} />
        <Button1
          text='Click'
          isButonClick={true}
          manageClick={manageClick} />
        <Button1
          text='Restart'
          isButonClick={false}
          manageClick={restartCounter} />
      </div>
    </div>
  );
}

export default App;
