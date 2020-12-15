import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ProfilePicture from './img/eu.jpg'
import NosPicture from './img/nosImg.jpg'
import HidealPicture from './img/logoHiperideal.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ProfilePicture} 
          nome="Daniel Ribeiro Sacramento" 
          descricao="Oi, tudo bem? Deixa eu me aprensentar... Sou baiano, mas moro em Portugal,
          tenho 27 anos e atualmente estudo programação.
          Também gosto bastante de atividade física, leitura e ouvir podcasts sobre ciência."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={HidealPicture} 
          nome="Serrana Empreendimentos" 
          descricao="Aux. Admistrativo. Trabalhando mais especificamente no setor Fiscal." 
        />
        
        <CardGrande 
          imagem={NosPicture} 
          nome="NOS Empreendimentos" 
          descricao="Apoio técnico ao cliente. Lidava com questões envolvendo configurações de internet,
          TV e serviços de voz." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
