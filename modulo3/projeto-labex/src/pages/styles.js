import styled from "styled-components";


//HOME
export const DivHome = styled.div`
  display: flex;
  /* flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;

    button {
      margin: 10% 0;
      width: 60%;
      height: 50px;
    }
  

  h1 {
    color: cyan;
    text-shadow: 1px 1px 5px orange;
    font-size: 4em;
  }

  b{
      color: orange;
  } */
`;

export const BottonImg = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: center;
  width: 40%; */
`

export const ImgLogo = styled.img`
  width: 50%;
`

//Lista de Viagens

export const DivListTrips = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2% 0;

  h2{
      text-align: center;
      margin: 2% 0;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;

  button{
      margin: 0 4%;
  }
`

export const GridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 2%;
  width: 80%;
`;

export const CardTrips = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 1px 1px 5px black;
  border-radius: 2%;
  padding: 2%;
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
`;