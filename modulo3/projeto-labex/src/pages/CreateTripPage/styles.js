
import styled from "styled-components";

export const CreateTrip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const CardForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3% 0;
  flex-direction: column;
  width: 30%;
  color: white;
  box-shadow: 1px 1px 20px cyan;


  form{
    width: 70%;
    text-align: center;
  }
  

  input{
    margin: 3% 0;
    width: 100%;
  }

  @media (max-width: 600px){
    width: 90%;
  }
`;

export const DivButtonsCreateTrip = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 5%;
`