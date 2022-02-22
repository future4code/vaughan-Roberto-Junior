import styled from 'styled-components';
import Router from './Routes/Router';
import  'bootstrap/dist/css/bootstrap.min.css' ;


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
