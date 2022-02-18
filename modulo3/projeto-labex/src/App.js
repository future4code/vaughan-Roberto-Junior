
import styled from 'styled-components';
import './index.css';
import Router from './route/Routes';

const DivApp = styled.div`
  width: 100%;
`


function App() {

  return (
    <DivApp>
      <Router />
    </DivApp>
  );
}

export default App;
