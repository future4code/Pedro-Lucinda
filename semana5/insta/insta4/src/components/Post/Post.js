import React from "react";
import "./Post.css";

import { IconeComContador } from "../IconeComContador/IconeComContador";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";

import iconeTagOutline from "../../img/tag-outline.svg";
import iconeTagBlack from "../../img/tag-black.svg";

import iconeShareOutline from "../../img/share-outline.svg";
import iconeShareBlack from "../../img/share-black.svg";

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    tag: false,
    share: false,
  };

  onClickCurtida = () => {
    this.setState({
      curtido: true,
      numeroCurtidas: this.state.numeroCurtidas + 1,
    });
  };

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
    });
  };

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    });
  };

  onClickTag = () => {
    this.setState({
      tag: true,
    });
  };

  onClickShare = () => {
    this.setState({
      share: true,
    });
  };

  render() {
    let iconeCurtida;

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto;
    } else {
      iconeCurtida = iconeCoracaoBranco;
    }

    let componenteComentario;

    if (this.state.comentando) {
      componenteComentario = (
        <SecaoComentario aoEnviar={this.aoEnviarComentario} />
      );
    }

    let iconeTag;

    if (this.state.tag) {
      iconeTag = iconeTagBlack;
    } else {
      iconeTag = iconeTagOutline;
    }

    let iconeShare;

    if (this.state.share) {
      iconeShare = iconeShareBlack;
    } else {
      iconeShare = iconeShareOutline;
    }

    return (
      <div className={"post-container"}>
        <div className={"post-header"}>
          <img
            className={"user-photo"}
            src={this.props.fotoUsuario}
            alt={"Imagem do usuario"}
          />
          <p>{this.props.nomeUsuario}</p>
        </div>

        <img
          className={"post-photo"}
          src={this.props.fotoPost}
          alt={"Imagem do post"}
        />

        <div className={"post-footer"}>
          <div className="likeAndTag">
            <img
              src={iconeTag}
              onClick={this.onClickTag}
              className="tag"
              alt="tag"
            />

            <IconeComContador
              icone={iconeCurtida}
              onClickIcone={this.onClickCurtida}
              valorContador={this.state.numeroCurtidas}
            />
          </div>

          <div className="shareAndComentario">
            <img
              src={iconeShare}
              onClick={this.onClickShare}
              className="share"
            />

            <IconeComContador
              icone={iconeComentario}
              onClickIcone={this.onClickComentario}
              valorContador={this.state.numeroComentarios}
            />
          </div>
        </div>
        {componenteComentario}
      </div>
    );
  }
}

export default Post;
