
import styled from "styled-components";


export const DivRegister = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 5px gray;
  padding: 3%;
  width: 30%;
  height: 10%;
  text-align: center;
  margin-top: 5%;

    background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

  form > input{
    margin: 2% 0;
  }

  form > button {
    width: 100%;
  }

  @media (max-width: 600px){
    width: 100%;
    margin-top: 20%;
  }
`