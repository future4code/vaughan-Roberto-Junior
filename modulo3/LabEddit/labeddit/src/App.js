import styled from 'styled-components';
import Router from './Routes/Router';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import ImgBack from './img/back.jpg'


const DivApp = styled.div`  
   display: flex;
   justify-content: center;
   /* background-image: linear-gradient(to bottom, black, gray); */
   background-image: url(${ImgBack});
   background-size: cover;
   min-height: 100vh;
`

function App() {
  return (
    <DivApp>
      <Router />
    </DivApp>
  );
}

export default App;
