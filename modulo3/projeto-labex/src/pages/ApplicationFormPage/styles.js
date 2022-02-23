import styled from "styled-components";
import SpaceForm from '../../img/spaceForm.png'


export const DivAppForm = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AppForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  flex-direction: column;
  /* color: white; */
  /* background-image: url(${SpaceForm}); */
  padding: 2%;
  box-shadow: 1px 1px 10px cyan;

  form{
    width: 70%;
  }

  input {
    margin: 2% 0;
    width: 100%;
  }

  .paises{
    color: black;
  }

  h3{
    color: white;
  }

  @media (max-width: 600px){
    width: 90%;
  }
  
`;

export const DivButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 2% auto;
`