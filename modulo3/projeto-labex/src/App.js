
import { useEffect, useState } from 'react';
import './index.css';
import DivInit from './pages/DivInit/DivInit';
import Router from './route/Routes';



function App() {

  const [state, setState] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setState(false);
    },2000)
  },[])

  return (
    <>
      {state ? <DivInit/> : <Router />}
    </>
  );
}

export default App;
