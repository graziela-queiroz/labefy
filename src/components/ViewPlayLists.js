import React from "react";
import axios from "axios";
import styled from "styled-components";

const DivList = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ff9719 ;
  align-items: center;
  flex-direction: initial;
`
const DivPlaylists = styled.div`
    flex-direction: initial;
`
const ButtonPlaylists = styled.button`
    background-color: #3c6b95;
    font-family: monospace;
    border-radius: 20px;
`
const ButtonVoltar = styled.button`
    margin: 10px;
    background-color: darkorange;
    font-family: monospace;
    border-radius: 20px;
    border-color: aliceblue;
    width: 100px;
    padding: 10px;
`
const H1Playlist = styled.h1`
margin: 10px;
color: aliceblue;
`
export default class ViewPlayLists extends React.Component {
    state = {
        playlists: [],
    }

    componentDidMount() {
        this.getAllPlayList()
    }

    getAllPlayList = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "graziela-queiroz-silveira"
            }
        })
            .then((res) => {
                this.setState({ playlists: res.data.result.list })
            })
            .catch((err) => {
                alert(err, "Ocorreu um erro, tente novamente !");
            })
    }

    deletePlaylist = (playlistId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`
        axios.delete(url, {
            headers: {
                Authorization: "graziela-queiroz-silveira"
            }
        })
            .then((res) => {
                alert("PlayList deletada com sucesso!")
                this.getAllPlayList()
            })
            .catch((err) => {
                alert("Ocorreu um erro, tente novamente")
            })
    }

    render() {
        const lists = this.state.playlists.map((list) => {
            return (
                <DivList  key={list.id}>
                    <DivPlaylists
                        onClick={() => this.props.irDetalhePlayList(list.id)}
                    >
                        {list.name}
                    </DivPlaylists>
                    <ButtonPlaylists onClick={() => this.deletePlaylist(list.id)}>x</ButtonPlaylists>
                </DivList>
            )
        })

        return (
            <div>
                {/* <ButtonVoltar onClick={this.props.irParaCriarPlayList}>Voltar</ButtonVoltar> */}
                <H1Playlist>PlayLists</H1Playlist>
                {lists}
            </div>
        )

    }
}