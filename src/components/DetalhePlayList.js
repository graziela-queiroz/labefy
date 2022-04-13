import React from 'react';
import axios from 'axios';
import styled from "styled-components";

const ComponentDetalhe = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  background-color: #ff9719 ;
`
const H1Detalhe = styled.h1`
margin: 10px;
color: aliceblue;
`

export default class DetalhePlayList extends React.Component {
  state = {
    tracks: [],
  }

  componentDidMount() {
    this.getAllTracks()
  }

  getAllTracks = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`
    axios.get(url, {
      headers: {
        Authorization: "graziela-queiroz-silveira"
      }
    })
      .then((res) => {
        this.setState({ tracks: res.data.result.tracks })
      })
      .catch((err) => {
        alert(err, "Ocorreu um erro, tente novamente !");
      })
  }

  deletePlaylist = (playlistId, trackId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks/${trackId}`
    axios.delete(url, {
      headers: {
        Authorization: "graziela-queiroz-silveira"
      }
    })
      .then((res) => {
        alert("Musica deletada com sucesso!")
        this.getAllTracks()
      })
      .catch((err) => {
        alert("Ocorreu um erro, tente novamente")
      })
  }

  render() {
    const faixas = this.state.tracks.map((faixa) => {
      return (
        <ComponentDetalhe key={faixa.id}>
          <p>Musica: {faixa.name}</p>
          <p>Artista: {faixa.artist}</p>
          <video>URL: {faixa.url}</video>
          <button onClick={() => this.deletePlaylist(faixa.id)}>Deletar</button>
        </ComponentDetalhe>
      )

    })
    return (
      <div>
        <button onClick={this.props.irParaPlayList}>Voltar</button>
        <button onClick={this.props.irAddTrack}>Add Musica</button>
        <H1Detalhe>Detalhe PlayList</H1Detalhe>
        
        {faixas}

      </div>
    )
  }
}
