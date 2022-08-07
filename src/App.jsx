import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Create from './Components/Create'
import { useState } from 'react';


function App() {

  const [create, setCreate] = useState(null);

  const view_create = () => {
    setCreate(true)
  }
  const hide_create = () => {
    setCreate(null)
  }

  return (
      <div className="App">
        <Navbar view_create={view_create} />
        <div className="content">
          { create && <Create hide_create={hide_create} /> }
          <Home />
        </div>
      </div>
  );
}

export default App;
