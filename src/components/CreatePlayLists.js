import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerCreate = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: monospace;
`
const ButtonCreate = styled.button`
    margin: 20px;
    background-color: darkorange;
    font-family: monospace;
    border-radius: 20px;
    border-color: aliceblue;
    height: 40px;
    padding: 10px;
`

const InputCreate = styled.input`
    font-family: monospace;
    width: 300px;
    border-block-color: orange;
    height: 30px;
    border-radius: 20px;
    padding-left: 20px;
`

const H1 = styled.h1`
color: aliceblue;
`

export default class CreatePlayLists extends React.Component {
    state = {
        name: "",
    }

    playName = (event) => {
        this.setState({ name: event.target.value })
    }

    postCreate = () => {
        const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.name,
        }
        axios.post(baseUrl, body, {
            headers: {
                Authorization: "graziela-queiroz-silveira"
            }
        })
        .then((res) => {
            alert("Playlist criada com sucesso!")
            this.setState({ name: "" })
        })
        .cath((err) => {
            alert(err.response.data.message, 'erro')
        })
    }

    render() {
        return (
            <ContainerCreate>
                <ButtonCreate onClick={this.props.irParaPlayList}>ir para PlayList</ButtonCreate>
                <H1>LabeFy</H1>
                <InputCreate
                    placeholder={"Name"}
                    value={this.state.name}
                    onChange={this.playName}
                />
                <ButtonCreate onClick={this.postCreate}>CriarPlayList</ButtonCreate>
            </ContainerCreate>
        )
    }
}

