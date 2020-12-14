import './App.css';

function App() {

  const titulo = 'Titulo do vídeo'

  function reproduzVideo() {
    
    alert("O vídeo será reproduzido")
  }

  return (
    <div>
      <div className="tela-inteira">
        <header>
            <h1>LabeTube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca"/>
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <a href="#"><li className="botoes-meunu-vertical">Início</li></a>
                    <a href="#"><li className="botoes-meunu-vertical">Em alta</li></a>
                    <a href="#"><li className="botoes-meunu-vertical">Inscrições</li></a>
                    <a href="#"><li className="botoes-meunu-vertical">Biblioteca</li></a>
                    <hr />
                    <a href="#"><li className="botoes-meunu-vertical">Originais</li></a>
                    <a href="#"><li className="botoes-meunu-vertical">Histórico</li></a>
                    <a href="#"><li className="botoes-meunu-vertical">Seus vídeos</li></a>
                    <a href="#"><li className="botoes-meunu-vertical">Assistir mais tarde</li></a>
                </ul>
            </nav>
            
            <section className="painel-de-videos">
                <div className="box-pagina-principal media1">
                    <video src="https://storage.googleapis.com/future-apis.appspot.com/1.mp4" onClick={reproduzVideo} controls className="video"></video>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2">
                    <video src="https://storage.googleapis.com/future-apis.appspot.com/2.mp4" onClick={reproduzVideo} controls className="video"></video>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3">
                    <video src="https://storage.googleapis.com/future-apis.appspot.com/3.mp4" onClick={reproduzVideo} controls className="video"></video>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4">
                    <video src="https://storage.googleapis.com/future-apis.appspot.com/4.mp4" onClick={reproduzVideo} controls className="video"></video>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5">
                    <video src="https://storage.googleapis.com/future-apis.appspot.com/5.mp4" onClick={reproduzVideo} controls className="video"></video>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6">
                    <video src="https://storage.googleapis.com/future-apis.appspot.com/6.mp4" onClick={reproduzVideo} controls className="video"></video>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7">
                    <video src="https://storage.googleapis.com/future-apis.appspot.com/7.mp4" onClick={reproduzVideo} controls className="video"></video>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8">
                    <video src="https://storage.googleapis.com/future-apis.appspot.com/8.mp4" onClick={reproduzVideo} controls className="video"></video>
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>

        <footer>
            <p><strong>LabeTube</strong>, onde você encontra os melhores conteúdos
                sobre o mundo, o universo e tudo mais!
            </p>
        </footer>
      </div>

    </div>
  );
}

export default App;
