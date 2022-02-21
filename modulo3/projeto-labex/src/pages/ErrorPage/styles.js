
import styled from "styled-components";

export const DivError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: black;

  div{
      width: 50%;
      text-align: center;
  }

  h1{
      color: white;
      font-size: 5em;
  }

  button {
      width: 20%;
  }

  @media (max-width: 600px){
    
    div{
      width: 90%;
    }

    h1{
      font-size: 2em;
    }


    button{
      width: 60%;
    }
  }
`;