import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className={'app-container'}>
          <Post
            nomeUsuario={'Daniel'}
            fotoUsuario={'https://picsum.photos/50/50?ramdon=1'}
            fotoPost={'https://picsum.photos/200/150?ramdon=1'}
          />
        </div>

        <div className={'app-container'}>
          <Post
            nomeUsuario={'Juliana'}
            fotoUsuario={'https://picsum.photos/50/50?ramdon=2'}
            fotoPost={'https://picsum.photos/200/150?ramdon=2'}
          />
        </div>

        <div className={'app-container'}>
          <Post
            nomeUsuario={'Valer'}
            fotoUsuario={'https://picsum.photos/50/50?ramdon=3'}
            fotoPost={'https://picsum.photos/200/150?ramdon=3'}
          />
        </div>
      </div>
    );
  }
}

export default App;
