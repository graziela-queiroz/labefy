import React from 'react';
import axios from 'axios';
// import styled from 'styled-components'

export default class AddTrackPlayList extends React.Component {
    state = {
        name: "",
        artist: "",
        url: ""
    }

    TrackName = (event) => {
        this.setState({ name: event.target.value })
    }
    TrackArtist = (event) => {
        this.setState({ artist: event.target.value })
    }
    TrackUrl = (event) => {
        this.setState({ url: event.target.value })
    }

    creatTrack = () => {
        const baseUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props}/tracks`
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url
        }
        axios.post(baseUrl, body, {
            headers: {
                Authorization: "graziela-queiroz-silveira"
            }
        })
        .then((res) => {
            alert("Musica adicionada com sucesso!")
            this.setState({ name: "", artist: "", url: ""})
        })
        .cath((err) => {
            alert(err.response.data.message, 'erro')
        })
    }

    render() {
        return (
            <div>
            
                <button onClick={this.props.irParaPlayList}>Voltar</button>
                <h2>Adicionar Nova Musica</h2>
                <input
                    placeholder={"Nome"}
                    value={this.state.name}
                    onChange={this.TrackName}
                />
                <input
                    placeholder={"Artista"}
                    value={this.state.artist}
                    onChange={this.TrackArtist}
                />
                <input
                    placeholder={"Url"}
                    value={this.state.url}
                    onChange={this.TrackUrl}
                />
                <button onClick={this.props.creatTrack}>Add Musica</button>
            </div>
        )
    }
}
 
    
       
            
          
        
      
          
      
    
  
  
     
   
  
  
  
