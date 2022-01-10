import logo from './logo.svg';
import './App.css';

function App() {

  const titulo = "Titulo do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
}
  
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <div className='logo-image'>
            <img src='https://cdn-icons-png.flaticon.com/512/1562/1562715.png' />
            <h1>LabTube</h1>
          </div>
          <div className='busca-logo'>
            <input type="text" placeholder="Pesquisar" id="campoDeBusca"/>
            <img src='https://cdn-icons-png.flaticon.com/512/6242/6242904.png'/>
          </div>
            <button className='botao-login'>Login</button>
        </header>

        <main>
            <nav class="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical">Início</li>
                    <li className="botoes-meunu-vertical">Explorar</li>
                    <li className="botoes-meunu-vertical">Inscrições</li>
                    <hr/>
                    <li className="botoes-meunu-vertical">Biblioteca</li>
                    <li className="botoes-meunu-vertical">Histórico</li>
                    <li className="botoes-meunu-vertical">Seus Vídeos</li>
                    <li className="botoes-meunu-vertical">Mais Tarde</li>
                    <li className="botoes-meunu-vertical">Marcados</li>
                </ul>
            </nav>

            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media9" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=9 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media10" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=10 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media11" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=11 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media12" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=12 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media13" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=13 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media14" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=14 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media15" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=15 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media16" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=16 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>

        {/* <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer> */}
      </div>
    </div>

  )
};

export default App;
