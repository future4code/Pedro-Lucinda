import React from 'react';
import './videos.css'

const Video = ()=> {

  const titulo = "Titulo do Video";
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  };

  let views = parseInt( Math.random() * 10000)

    return(
        <div className="box-pagina-principal media1" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=1 " alt="" />
            <h4>{titulo}</h4>
            <p> Canal</p>
            <p> {views}k views </p>
        </div>
    )
}

export default Video