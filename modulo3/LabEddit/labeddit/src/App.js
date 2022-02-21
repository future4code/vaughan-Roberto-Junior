import styled from 'styled-components';
import Router from './Routes/Router';


const DivApp = styled.div`  
   display: flex;
   justify-content: center;
`

function App() {
  return (
    <DivApp>
      <Router />
    </DivApp>
  );
}

export default App;
