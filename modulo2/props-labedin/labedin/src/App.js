import React from 'react';
import './App.css';
import styled from "styled-components";
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';


function App() {

  
  const EstiloCardPequeno = styled.div`

    display: flex;
    align-items: center;
    justify-items: flex-start;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;

  img {
  width: 70px;
  margin-right: 10px;
  border-radius: 50%;
  }

  div {
    display: flex;
    align-items: center;
  }

  div > h4 {
    margin-right: 20px;
  }

`

const EstiloCardGrande = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;


img {
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
}

.bigcard-container {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
}

div > h4 {
  margin-bottom: 15px;
}

`

const ButtonIndex = styled.div`

    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;

    img{
      width: 30px;
      margin-right: 10px;
    }

`

  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <EstiloCardGrande>
        <CardGrande 
          imagem="http://fat-basket.surge.sh/img/eu.png" 
          nome="Roberto Maia" 
          descricao="Oi, eu sou o Roberto Maia. Futuro Desenvolvedor Full Stack , Gosto séries e animes e adoro ler."
        />

        </EstiloCardGrande>
        
        <ButtonIndex>
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        </ButtonIndex>
      </div>

    <div className="page-section-container">
      <EstiloCardPequeno>
      <CardPequeno 
          imagem="https://cdn-icons-png.flaticon.com/512/580/580704.png"
          nome="Email: " 
          descricao="Eu@Eumesmo.com" 
        />
      </EstiloCardPequeno>

      <EstiloCardPequeno>
      <CardPequeno 
          imagem="https://cdn-icons.flaticon.com/png/512/5837/premium/5837790.png?token=exp=1641919805~hmac=c8b0f09caa503911b0216f3e9a879c23" 
          nome="Endereço: " 
          descricao="Rua dos Alfeneiros Nº 4" 
        />
        </EstiloCardPequeno>
    </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <EstiloCardGrande>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eab0f1225c2d474a92656df_fav2_LabeNu_.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        </EstiloCardGrande>
        
        <EstiloCardGrande>
        <CardGrande 
          imagem="https://i.pinimg.com/originals/1f/ad/a9/1fada94ec698870aa24945fefbc9833a.png" 
          nome="Unopar" 
          descricao="Analise e Desenvolvimento de Sistemas" 
        />
        </EstiloCardGrande>

      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ButtonIndex>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        
        </ButtonIndex>

        <ButtonIndex>
        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
        </ButtonIndex>
      </div>
    </div>
  );
}

export default App;
