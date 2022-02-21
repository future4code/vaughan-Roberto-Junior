
import styled from "styled-components";

export const DivPainelAdm = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;

  h1{
    color: white;
    margin: 2%;
  }
`

export const ListTripsName = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 1px 1px 5px gray;
  padding: 1%;
  font-weight: bold;
  margin: 0.3% 0;
  width: 30%;
  background-color: whitesmoke;

  :hover {
    background-color: lightgray;
  }

  @media (max-width: 600px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
  }
`;

export const DivButtonsPanelAdm = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;

  @media (max-width: 600px){
    width: 100%;
    justify-content: space-evenly;
  }
`

export const ButtonsAdm = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
  margin-bottom: 1%;

  @media (max-width: 600px){
    width: 100%;
  }
`