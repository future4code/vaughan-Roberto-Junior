import styled from "styled-components";


export const DivLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  text-align: center;
  padding: 5%;
  box-shadow: 1px 1px 5px gray; 
  margin-top: 2%;

    background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

  form > button{
    width: 100%;
    margin: 2% 0;
  }

  form > input{
    margin: 2% 0;
  }
`;

export const TitleHome = styled.div`
  display: flex;
  justify-content: center;
  font-size: 5em;
  background-color: black;
  color: white;
  width: 100%;
  margin-top: 2%;
  text-align: center;
  color: black;
  font-weight: bold;

  span{
     text-shadow: 1px 1px 5px black;
     color: orange;
  }

  i{
    color: #20B2AA;
    text-shadow: 1px 1px 5px black;
  }


    background: rgba( 255, 255, 255, 0.1 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`

export const PricipalLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`