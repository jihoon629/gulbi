import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './responsive.css';
import Gulbi from './UUUSSS/Gulbi';
import JuDdoJu from './UUUSSS/JuDdoJu';
import Ssal from './UUUSSS/Ssal';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [currentComponent, setCurrentComponent] = useState('Gulbi'); // 현재 렌더링할 컴포넌트 상태

  const renderComponent = () => {
    switch (currentComponent) {
      case 'Gulbi':
        return <Gulbi />;
      case 'JuDdoJu':
        return <JuDdoJu />;
      case 'Ssal':
        return <Ssal />;
      default:
        return <Gulbi />;
    }
  };

  return (
    <div className="app-container">
      <div className="main-content">
        <div className="component-container">
          {renderComponent()}
        </div>
      </div>
      <footer>
        <button onClick={() => setCurrentComponent('Gulbi')}>굴비</button>
        <button onClick={() => setCurrentComponent('JuDdoJu')}>주또주</button>
        <button onClick={() => setCurrentComponent('Ssal')}>쌀</button>
      </footer>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
