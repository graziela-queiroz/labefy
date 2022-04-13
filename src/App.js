import React from 'react';
import CreatePlayLists from './components/CreatePlayLists';
import ViewPlayLists from './components/ViewPlayLists';
import DetalhePlayList from './components/DetalhePlayList';
import AddTrackPlayList from './components/AddTrackPLayList';
// import {createGlobalStyle} from 'styled-component';
// const GlobalStyle = createGlobalStyle

// *{ display:grid,
//    grid-template-rows: 80px 1fr 80px;
// }

// header{
//   grid-row: 1/1;
// }

export default class App extends React.Component{
  state = {
    telaAtual: "criarPlaylist",
    clickedListId: ""
  }

  trocaTela = () => {
    switch(this.state.telaAtual){
      case "criarPlaylist":
        return <CreatePlayLists irParaPlayList={this.irParaPlayList}/>
      case "verPlaylist":
        return <ViewPlayLists irDetalhePlayList={this.irDetalhePlayList}/>
      case "detalhePlaylist":
        return <DetalhePlayList irAddTrack={this.irAddTrack} id={this.state.clickedListId}/>
      case "addTrack":
        return <AddTrackPlayList irParaPlayList={this.irParaPlayList} />
      default:
        return <CreatePlayLists irParaPlayList={this.irParaPlayList}/>
    }
  }

  irParaCriarPlayList = () => {
    this.setState({ telaAtual: "criarPlaylist" })
  }

  irParaPlayList = () => {
    this.setState({ telaAtual: "verPlaylist" })
  }

  irDetalhePlayList = (id) => {
    this.setState({ telaAtual: "detalhePlaylist", clickedListId: id })
  }

  irAddTrack = () => {
    this.setState({ telaAtual: "addTrack"})
  }

  render(){
    return(
      <div>
        {this.trocaTela()}
      </div> 
    )
  }
}
