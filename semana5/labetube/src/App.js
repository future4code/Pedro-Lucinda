import React from 'react';
import './App.css';
import Video from './Video'
import Logo from './imgs/logoEscuro.png'
import IconSearch from './imgs/searchIcon.svg'
import UserIcon from './imgs/user-profile.svg'

function App(props) {

  return (
    <div className="all">
      <div className="tela-inteira">
        <header >
          <img id="logo" src={Logo} alt="Labetube"/>
          
          <div className="search">
              <input type="text" placeholder="Busca" id="campoDeBusca" />
              <a href="#" >
                <img id="searchIcon" src={IconSearch}/>
              </a>
          </div>

                 
          <a href="#">
                <img src={UserIcon} id="user"/>
          </a>
       
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">

            <Video className="videos" />

            <Video className="videos" />

            <Video className="videos" />

            <Video className="videos" />

            <Video className="videos" />

            <Video className="videos" />

            <Video className="videos" />

            <Video className="videos" />
            <Video className="videos" />


          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>

    </div>
  );
}

export default App;
