
import styled from "styled-components";

export const DivDetailsPage = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2%;
  text-align: center;
  padding: 1%;

  div {
    margin: 5% auto;
    width: 90%;
  }

  .divBottons {
    display: flex;
    border: none;
    justify-content: space-around;
    width: 80%;
  }

  @media (max-width: 600px){
    grid-template-columns: 1fr;
    margin-bottom: 50%;
    height: 100%;
  }
`;

export const CardDetails = styled.div`
  box-shadow: 1px 1px 10px white; 
  padding: 2%;
  text-align: justify;
`;

export const CardPending = styled.div`
  display: block;
  box-shadow: 1px 1px 10px white;
  padding: 2%;
  text-align: justify;
`;