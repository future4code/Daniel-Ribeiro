import './App.css';

function App() {

  const titulo = 'Titulo do vídeo'
  
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div>
      <div className="tela-inteira">
        <header>
            <h1>LabeTube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical">Início</li>
                    <li className="botoes-meunu-vertical">Em alta</li>
                    <li className="botoes-meunu-vertical">Inscrições</li>
                    <hr />
                    <li className="botoes-meunu-vertical">Originais</li>
                    <li className="botoes-meunu-vertical">Histórico</li>
                    <li className="botoes-meunu-vertical">Seus vídeos</li>
                    <li className="botoes-meunu-vertical">Assistir mais tarde</li>
                </ul>
            </nav>
            
            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    {/*<img src="https://picsum.photos/400/400?a=1 " alt="" />*/}
                    <video src="https://storage.googleapis.com/future-apis.appspot.com/1.mp4" controls className="video"></video>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    {/*<img src="https://picsum.photos/400/400?a=2 " alt="" />*/}
                    <video src="https://storage.googleapis.com/future-apis.appspot.com/2.mp4" controls className="video"></video>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    {/*<img src="https://picsum.photos/400/400?a=3 " alt="" />*/}
                    <video src="https://storage.googleapis.com/future-apis.appspot.com/3.mp4" controls className="video"></video>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    {/*<img src="https://picsum.photos/400/400?a=4 " alt="" />*/}
                    <video src="https://storage.googleapis.com/future-apis.appspot.com/4.mp4" controls className="video"></video>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    {/*<img src="https://picsum.photos/400/400?a=5 " alt="" />*/}
                    <video src="https://storage.googleapis.com/future-apis.appspot.com/5.mp4" controls className="video"></video>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    {/*<img src="https://picsum.photos/400/400?a=6 " alt="" />*/}
                    <video src="https://storage.googleapis.com/future-apis.appspot.com/6.mp4" controls className="video"></video>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    {/*<img src="https://picsum.photos/400/400?a=7 " alt="" />*/}
                    <video src="https://storage.googleapis.com/future-apis.appspot.com/7.mp4" controls className="video"></video>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    {/*<img src="https://picsum.photos/400/400?a=8 " alt="" />*/}
                    <video src="https://storage.googleapis.com/future-apis.appspot.com/8.mp4" controls className="video"></video>
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
