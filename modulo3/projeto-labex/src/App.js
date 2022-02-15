
import styled from 'styled-components';
import './index.css';
import HomePage from './pages/HomePage';
import ListTripsPage from './pages/ListTripsPage';
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
